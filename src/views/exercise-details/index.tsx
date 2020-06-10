import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { ExerciseDetailsForm } from "../../components/forms/exercise-details-form";
import { IExercise } from "../../config/definitions";
import { LoadingAnimation } from "../../components/loading-animation";

interface IWebserviceCommandResponse {
	exercises: IExercise;
}

export const ExerciseDetailsView: FC = () => {
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

	let content = (<LoadingAnimation />);

	if (loading) {
		content = (<LoadingAnimation />)
	}
	else if (error) {
		content = (<p>Error :(<br />
			{JSON.stringify(error)}
		</p>)
	}
	else {
		const { exerciseDetails } = data;
		const details: IExercise = exerciseDetails || { username: "", description: "", duration: 0, date: "" };

		content = (<>
			<ExerciseDetailsForm details={details} />
		</>);
	}

	return (
		<View>
			{content}
		</View>
	);
}
