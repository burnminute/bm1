import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { ExerciseDetailsForm } from "../../components/forms/exercise-details-form";
import { IExercise } from "../../config/definitions";

interface IWebserviceCommandResponse {
	exercises: IExercise;
}

export const ExerciseDetails: FC = () => {
	const { id } = useParams();
	const exerciseId: string = id || "new";

	const { loading, error, data } = useQuery(gql`
		  query getExerciseDetails($id: String!) {
			exerciseDetails(id:$id) {
			  id
			  username
			  description
			  duration
			  date
			}
		  }
		`, { variables: { id: exerciseId } });

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(<br />
		{JSON.stringify(error)}
	</p>;

	const { exerciseDetails } = data;
	const details: IExercise = exerciseDetails || { username: "", description: "", duration: 0, date: "" };

	// const { username,
	// 	description,
	// 	duration,
	// 	date }: IExercise = details;

	return (
		<ExerciseDetailsForm details={details} />
		// <ListWrapper key={description}>
		// 	<p>
		// 		{id}
		// 		<br />
		// 		{username}: {description}
		// 		<br />
		// 		{duration} {` reps`}
		// 		<br />
		// 		{date}
		// 	</p>
		// </ListWrapper>
	);
}
