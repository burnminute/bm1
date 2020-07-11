import React, { FC } from "react";
import { IBgColor, IExercise } from "../../config/definitions";
import styled from "styled-components";
import {
	CenteredContentWrapper,
	DetailsBodyWrapper,
	DetailsContentWrapper,
	DetailsFooterWrapper,
	DetailsHeaderWrapper,
} from "../../components/layout";
import { StartExerciseButton } from "../../components/buttons";
import { EXERCISE_BG_HIGHLIGHT_COLOR } from "../exercise-list";

// import randomRgba from "random-rgba";

const PreviewWrapper = styled.div<IBgColor>`
	border-radius: 0.75rem;
	background-color: ${(props) =>
		props?.bgColor ? props.bgColor : `rgba(251, 253, 255, 0.37)`};
	border: 0.25rem solid rgba(251, 253, 255, 0.67);
	width: 100%;
	display: flex;
	padding: 1rem 3rem;
`;

const PreviewImage = styled.img`
	border-radius: 0.5rem;
	height: 11rem;
`;

const PreviewDescription = styled.div`
	color: rgba(50, 130, 148, 0.87);
	padding: 1rem 0.5rem 0.5rem 0.5rem;
	width: 100%;
	text-align: left;
	font-size: 2.5rem;
`;
const PreviewDuration = styled(PreviewDescription)`
	padding: 0 1.5rem;
	font-size: 1.5rem;
	color: rgba(0, 15, 18, 0.87);
	width: 87%;
`;

const PreviewStartExerciseButton = styled(StartExerciseButton)`
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
		<DetailsContentWrapper>
			<DetailsHeaderWrapper>
				{exercise?.category || "Exercise"}
			</DetailsHeaderWrapper>
			<DetailsBodyWrapper>
				<PreviewImage
					src={exercise?.imageUrl || DEFAULT_IMAGE_URL}
					alt={exercise?.description}
				/>
				<PreviewDescription>{exercise?.description}</PreviewDescription>
				<PreviewDuration>{exercise?.duration}</PreviewDuration>
			</DetailsBodyWrapper>
			<DetailsFooterWrapper>
				<PreviewStartExerciseButton>{`go!`}</PreviewStartExerciseButton>
			</DetailsFooterWrapper>
		</DetailsContentWrapper>
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
		<PreviewWrapper
			bgColor={exercise ? EXERCISE_BG_HIGHLIGHT_COLOR : undefined}
		>
			<CenteredContentWrapper>{previewContent}</CenteredContentWrapper>
		</PreviewWrapper>
	);
};
