import React, { FC } from "react";
import { IExercise, Exercise } from "../../config/definitions";
import styled from "styled-components";
import { CenteredContentWrapper } from "../../components/layout";

export const PreviewWrapper = styled.div`
	background-color: white;
	border-radius: 0.75rem;
	width: 100%;
	display: flex;
`;

export interface IExercisePreview {
	exercise?: IExercise;
}

export const ExercisePreview: FC<IExercisePreview> = ({
	children,
	exercise,
}) => {
	const description = exercise?.description;
	return (
		<PreviewWrapper>
			<CenteredContentWrapper>
				{description || `< Select an Exercise from the list`}
			</CenteredContentWrapper>
		</PreviewWrapper>
	);
};
