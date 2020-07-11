import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IExercise, IListItem } from "../../config/definitions";
import { EXERCISE_BG_HIGHLIGHT_COLOR } from "./index";

export const ListItemWrapper = styled.div<IListItem>`
	background-color: ${(props) =>
		props.selected ? EXERCISE_BG_HIGHLIGHT_COLOR : `rgba(213, 223, 233, 0.1)`};
	&:hover {
		background-color: rgba(243, 253, 253, 0.3);
	}
	padding: 1rem;
`;

export interface IExerciseListItemProps extends IListItem {
	exercise: IExercise;
	onSelect?: (exercise: IExercise) => void;
}

export const ExerciseListItem: FC<IExerciseListItemProps> = ({
	exercise,
	onSelect,
	selected,
}) => {
	const handleRowClick = (evt: React.MouseEvent<HTMLElement>) => {
		evt.stopPropagation();

		if (onSelect) {
			onSelect(exercise);
		}
	};

	return (
		<ListItemWrapper
			key={exercise.id}
			onClick={handleRowClick}
			selected={selected}
		>
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
