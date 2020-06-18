import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { IExercise } from "../../config/definitions";
import { getExerciseListQuery } from "../../gql/exercises";

interface IResponse {
	exerciseList: IExercise[];
}

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	overflow-x: hidden;
	overflow-x: auto;
`;

export const ListItemWrapper = styled.div`
	background-color: rgba(213, 223, 233, 0.1);
	padding: 1rem;
`;

export const ExerciseList: FC = () => {
	const { loading, error, data } = useQuery(getExerciseListQuery);

	if (loading) return <LoadingAnimation />;
	if (error)
		return (
			<p>
				Error :(
				<br />
				{error}
			</p>
		);

	return (
		<ListWrapper>
			{data?.exerciseList?.map(
				({
					category,
					date,
					description,
					duration,
					id,
					username,
				}: IExercise) => (
					<ListItemWrapper key={id}>
						{id}
						<br />
						{category}
						<br />
						{username}: <Link to={`/exercises/${id}`}>{description}</Link>
						<br />
						{duration} {` reps`}
						<br />
						{date}
					</ListItemWrapper>
				)
			)}
		</ListWrapper>
	);
};
