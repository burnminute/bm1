
import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { ListWrapper } from "../../components/layout";
import { LoadingAnimation } from "../../components/layout/loading-animation";
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

	return (
		<>
			{data?.exerciseList?.map(({
				id,
				username,
				description,
				duration,
				date
			}: IExercise) => (
					<ListWrapper key={description + date}>
						{id}
						<br />
						{username}: <Link to={`/edit/${id}`}>
							{description}
						</Link>
						<br />
						{duration} {` reps`}
						<br />
						{date}
					</ListWrapper>
				))}
		</>);
}
