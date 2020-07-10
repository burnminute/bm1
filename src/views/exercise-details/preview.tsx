import React, { FC } from "react";
import { IExercise, Exercise } from "../../config/definitions";
import styled from "styled-components";
import { CenteredContentWrapper } from "../../components/layout";
import { StartExerciseButton } from "../../components/buttons";

// import randomRgba from "random-rgba";

const PreviewWrapper = styled.div`
	border-radius: 0.75rem;
	background-color: rgba(251, 253, 255, 0.37);
	border: 0.25rem solid rgba(251, 253, 255, 0.67);
	width: 100%;
	display: flex;
	padding: 1rem 3rem;
`;

const PreviewContentWrapper = styled(CenteredContentWrapper)`
	border-radius: 0.5rem;
	background-color: rgba(251, 253, 255, 0.37);
	padding: 1rem 2rem;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	justify-content: flex-start;
`;

const PreviewDescriptionWrapper = styled.div`
	border-radius: 0 0 0.5rem 0.5rem;
	padding: 1rem;
	background-color: rgba(251, 253, 255, 0.37);
	margin: 1.5rem 0 1.5rem 0;
	width: 100%;
	font-family: Quantico, sans-serif;
	font-size: 1.5rem;
`;
const PreviewCategoryWrapper = styled(PreviewDescriptionWrapper)`
	border-radius: 0.5rem 0.5rem 0 0;
	background-color: rgba(251, 253, 255, 0.37);
	margin: 0 0 1.5rem 0;
	text-align: end;
	color: rgba(41, 53, 57, 0.51);
	font-family: Sunflower, sans-serif;
	font-size: 1.25rem;
	font-weight: 700;
	width: 100%;
`;
const PreviewImageWrapper = styled(PreviewDescriptionWrapper)`
	background-color: rgba(251, 253, 255, 0.17);
	border-radius: 0;
	margin: 0;
	text-align: center;
	width: 100%;
`;

const PreviewImage = styled.img`
	border-radius: 0.5rem;
	height: 11rem;
`;

const PreviewStartExerciseButton = styled(StartExerciseButton)`
	margin-top: 1.5rem;
	padding: 2rem 4rem;
	font-size: 3rem;
`;

const DEFAULT_IMAGE_URL =
	// "https://www.burnminute.com/images/burnminute-logo.png";
	"https://static6.depositphotos.com/1003098/570/i/450/depositphotos_5703104-stock-photo-jumping-jacks.jpg";

export interface IExercisePreview {
	exercise?: IExercise;
}

export const PreviewContent: FC<IExercise> = (exercise) => {
	return (
		<PreviewContentWrapper>
			<PreviewCategoryWrapper>
				{exercise?.category || "Exercise"}
			</PreviewCategoryWrapper>
			<PreviewImageWrapper>
				<PreviewImage
					src={exercise?.imageUrl || DEFAULT_IMAGE_URL}
					alt={exercise?.description}
				/>
			</PreviewImageWrapper>
			<PreviewDescriptionWrapper>
				{exercise?.description}
			</PreviewDescriptionWrapper>
			<PreviewStartExerciseButton>{`go!`}</PreviewStartExerciseButton>
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
