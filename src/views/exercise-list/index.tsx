
import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ListWrapper } from "../../components/layout";

interface IExercise {
	id: string;
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
	  query getExerciseList {
		exerciseList {
		  id
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

	// const exercises = data.exerciseList;

	// return exercises.map(({
	return data.exerciseList.map(({
		id,
		username,
		description,
		duration,
		date
	}: IExercise) => (
			<ListWrapper key={description + date}>
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
		));
}
