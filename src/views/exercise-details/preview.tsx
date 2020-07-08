import React, { FC } from "react";
import { IExercise, Exercise } from "../../config/definitions";
import styled from "styled-components";
import { CenteredContentWrapper } from "../../components/layout";
import { StartExerciseButton } from "../../components/buttons";

// import randomRgba from "random-rgba";

export const PreviewWrapper = styled.div`
	border-radius: 0.75rem;
	background-color: rgba(251, 253, 255, 0.37);
	border: 0.25rem solid rgba(251, 253, 255, 0.67);
	width: 100%;
	display: flex;
	padding: 2rem;
`;

export const PreviewContentWrapper = styled.div`
	border-radius: 0.5rem;
	display: flex;
	background-color: rgba(251, 253, 255, 0.37);
	flex-direction: column;
	padding: 3rem;
`;

export interface IExercisePreview {
	exercise?: IExercise;
}

export const PreviewContent: FC<IExercise> = (exercise) => {
	return (
		<PreviewContentWrapper>
			<div>{exercise?.description}</div>
			<div>{exercise?.category}</div>
			<StartExerciseButton>{`go!`}</StartExerciseButton>
		</PreviewContentWrapper>
	);
};

export const ExercisePreview: FC<IExercisePreview> = ({
	children,
	exercise,
}) => {
	const previewContent = exercise ? (
		<PreviewContent {...exercise} />
	) : (
		`<- Select an Exercise from the list`
	);
	return (
		<PreviewWrapper>
			<CenteredContentWrapper>{previewContent}</CenteredContentWrapper>
		</PreviewWrapper>
	);
};
