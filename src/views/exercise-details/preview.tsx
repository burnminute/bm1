import React, { FC } from "react";
import { IBgColor, IExercise } from "../../config/definitions";
import {
	activityTimerState,
	elapsedTimeState,
} from "../../config/recoil-state";
import { Timer } from "../../components/timer";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {
	CenteredContentWrapper,
	DetailsBodyWrapper,
	DetailsContentWrapper,
	DetailsFooterWrapper,
	DetailsHeaderWrapper,
	DetailsTextWrapper,
} from "../../components/layout";
import { StartExerciseButton } from "../../components/buttons";
import { EditIcon } from "../../components/icons/edit";
import { EXERCISE_BG_HIGHLIGHT_COLOR } from "../exercise-list";

// import randomRgba from "random-rgba";

const PreviewWrapper = styled.div<IBgColor>`
	border-radius: 0.75rem;
	background-color: ${(props) =>
		props?.bgColor ? props.bgColor : `rgba(251, 253, 255, 0.37)`};
	border: 0.25rem solid rgba(251, 253, 255, 0.67);
	display: flex;
	padding: 1rem 3rem;
	max-height: 94%;
`;

const PreviewImage = styled.img`
	border-radius: 0.5rem;
	width: 60%;
`;

const PreviewDescription = styled.div`
	color: rgba(50, 130, 148, 0.87);
	padding: 1rem 0.5rem 0.5rem 0.5rem;
	/* width: 100%; */
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

const handleExerciseStart = () => {
	// Route to exercise action page.
};

export interface IExercisePreview {
	exercise?: IExercise;
}

export const PreviewContent: FC<IExercise> = (exercise) => {
	const { pathname } = useLocation();
	const nextActivityStartTime =
		30 * 60 * 1000 - useRecoilValue(elapsedTimeState);

	return (
		<DetailsContentWrapper>
			<DetailsHeaderWrapper>
				{exercise?.category || "Exercise"}
			</DetailsHeaderWrapper>
			{`Next activity starts in ...`}
			<Timer fullTime={nextActivityStartTime} />
			<DetailsBodyWrapper>
				<DetailsTextWrapper>
					<PreviewDescription>{exercise?.description}</PreviewDescription>
					<PreviewDuration>{exercise?.duration}</PreviewDuration>
					<Link to={`/exercises/${exercise?.id}/edit`} title="Edit">
						<EditIcon />
					</Link>
				</DetailsTextWrapper>
				<PreviewImage
					src={exercise?.imageUrl || DEFAULT_IMAGE_URL}
					alt={exercise?.description}
				/>
			</DetailsBodyWrapper>
			<DetailsFooterWrapper>
				<Link
					to={`/exercises/${exercise?.id}/start`}
					title="Start this exercise!"
				>
					<PreviewStartExerciseButton
						onClick={handleExerciseStart}
					>{`go!`}</PreviewStartExerciseButton>
				</Link>
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
		`Select an Exercise from the list`
	);
	return (
		<PreviewWrapper
			bgColor={exercise ? EXERCISE_BG_HIGHLIGHT_COLOR : undefined}
		>
			<CenteredContentWrapper>{previewContent}</CenteredContentWrapper>
		</PreviewWrapper>
	);
};
