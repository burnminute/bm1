import React, { FC, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { IExercise } from "../../config/definitions";
import { getExerciseListQuery } from "../../gql/exercise";
import { ExerciseListItem } from "./item";

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
`;

export interface IExerciseListProps {
	autoSelectFirstItem?: boolean;
	onSelectExercise?: (exercise: IExercise) => void;
	selectedId?: string;
}

export const ExerciseList: FC<IExerciseListProps> = ({
	autoSelectFirstItem,
	onSelectExercise: onSelect,
	selectedId,
}) => {
	const { loading, error, data } = useQuery(getExerciseListQuery);

	// Select the first item when flagged.
	const defaultExercise =
		!selectedId && autoSelectFirstItem
			? data?.exerciseList
				? data.exerciseList[0]
				: null
			: null;

	useEffect(() => {
		if (defaultExercise && onSelect) {
			onSelect(defaultExercise);
		}
	}, [loading]);

	if (loading) return <LoadingAnimation />;
	if (error)
		return (
			<p>
				Error :(
				<br />
				{error}
			</p>
		);

	const currentId = selectedId || defaultExercise?.id;

	return (
		<ListWrapper>
			{data?.exerciseList?.map((exercise: IExercise) => (
				<ExerciseListItem
					selected={exercise?.id === currentId}
					exercise={exercise}
					onSelect={onSelect}
					key={exercise.id}
				/>
			))}
		</ListWrapper>
	);
};

ExerciseList.defaultProps = {
	autoSelectFirstItem: true,
};
