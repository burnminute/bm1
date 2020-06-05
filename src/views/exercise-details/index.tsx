import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { ListWrapper } from "../../components/layout";

interface IExercise {
	username: string;
	description: string;
	duration: number;
	date: string;
}
interface IWebserviceCommandResponse {
	exercises: IExercise;
}

// export interface IExerciseDetails {
// 	id?: string;
// }

// function getExercises() {
export const ExerciseDetails: FC = () => {
	const { id } = useParams();

	// Create
	// if (!id) {
	// 	return (
	// 		<div>
	// 			{`Create form`}
	// 		</div>
	// 	)
	// }

	// Update
	const { loading, error, data } = useQuery(gql`
		  query getExerciseDetails($id: String) {
			exerciseDetails(id:$id) {
			  id
			  username
			  description
			  duration
			  date
			}
		  }
		`, { variables: { id } });

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(<br />
		{error}
	</p>;

	const { exerciseDetails } = data;

	return exerciseDetails?.length ? exerciseDetails.map(({ username,
		description,
		duration,
		date }: IExercise) => (
			<ListWrapper key={description}>
				<p>
					{id}
					<br />
					{username}: {description}
					<br />
					{duration} {` reps`}
					<br />
					{date}
				</p>
			</ListWrapper>
		)) : `No results found for ${id}`;
}
