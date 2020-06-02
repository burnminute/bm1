
import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// export const ExerciseList: FC = () => {
// 	const render = () => {
// 		return (
// 			<div>
// 				<p>You are on the Exercises List component!</p>
// 			</div>
// 		)
// 	}
// 	return render();
// }
interface IExercise {
	username: string;
	description: string;
	duration: number;
	date: string;
}
interface IWebserviceCommandResponse {
	exercises: IExercise;
}

// function getExercises() {
export const ExerciseList: FC = () => {
	const { loading, error, data } = useQuery(gql`
	  query getExercises {
		exercises {
		  username
		  description
		  duration
		  date
		}
	  }
	`);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(<br />
		{error}
	</p>;

	return data.exercises.map(({ username,
		description,
		duration,
		date }: IExercise) => (
			<div key={description}>
				<p>
					{username}: {description}
					<br />
					{duration} {` reps`}
					<br />
					{date}
				</p>
			</div>
		));
}
