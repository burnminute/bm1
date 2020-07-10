import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { IExercise } from "../../config/definitions";
import { getExerciseListQuery } from "../../gql/exercise";
import { ExerciseListItem } from "./item";

interface IResponse {
	exerciseList: IExercise[];
}

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
`;

export interface IExerciseListProps {
	onSelect?: (exercise: IExercise) => void;
}

export const ExerciseList: FC<IExerciseListProps> = ({ onSelect }) => {
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
			{data?.exerciseList?.map((exercise: IExercise) => (
				<ExerciseListItem
					exercise={exercise}
					onSelect={onSelect}
					key={exercise.id}
				/>
			))}
		</ListWrapper>
	);
};
