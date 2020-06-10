
import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ListWrapper } from "../../components/layout/components";
import { LoadingAnimation } from "../../components/loading-animation";
import { IExercise } from "../../config/definitions";

interface IResponse {
	exerciseList: IExercise[];
}

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

	if (loading) return <LoadingAnimation />;
	if (error) return <p>Error :(<br />
		{error}
	</p>;

	return data?.exerciseList?.map(({
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
