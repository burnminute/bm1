import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IExercise } from "../../config/definitions";

export const ListItemWrapper = styled.div`
	background-color: rgba(213, 223, 233, 0.1);
	&:hover {
		background-color: rgba(243, 253, 253, 0.3);
	}
	padding: 1rem;
`;

export interface IExerciseListItemProps {
	exercise: IExercise;
	onSelect?: (exercise: IExercise) => void;
}

export const ExerciseListItem: FC<IExerciseListItemProps> = ({
	exercise,
	onSelect,
}) => {
	const handleRowClick = (evt: React.MouseEvent<HTMLElement>) => {
		evt.stopPropagation();

		if (onSelect) {
			onSelect(exercise);
		}
	};

	return (
		<ListItemWrapper key={exercise.id} onClick={handleRowClick}>
			{exercise.id}
			<br />
			{exercise.category}
			<br />
			{exercise.username}:{" "}
			<Link to={`/exercises/${exercise.id}`}>{exercise.description}</Link>
			<br />
			{exercise.duration} {` reps`}
			<br />
			{exercise.date}
		</ListItemWrapper>
	);
};
