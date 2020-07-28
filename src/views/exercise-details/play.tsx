import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IBgColor, IExercise } from "../../config/definitions";
import styled from "styled-components";
import {
	CenteredContentWrapper,
	DetailsBodyWrapper,
	DetailsContentWrapper,
	DetailsFooterWrapper,
	DetailsHeaderWrapper,
	DetailsTextWrapper,
} from "../../components/layout";
import { StopExerciseButton } from "../../components/buttons";
import { EXERCISE_BG_HIGHLIGHT_COLOR } from "../exercise-list";
import { asyncFunctionDelay } from "async-function-delay";

// import randomRgba from "random-rgba";

const PlayWrapper = styled.div<IBgColor>`
	border-radius: 0.75rem;
	background-color: ${(props) =>
		props?.bgColor ? props.bgColor : `rgba(251, 253, 255, 0.37)`};
	border: 0.25rem solid rgba(251, 253, 255, 0.67);
	display: flex;
	padding: 1rem 3rem;
	max-height: 94%;
`;

const PlayImage = styled.img`
	border-radius: 0.5rem;
	width: 20rem;
`;

const PlayDescription = styled.div`
	color: rgba(50, 130, 148, 0.87);
	padding: 1rem 0.5rem 0.5rem 0.5rem;
	/* width: 100%; */
	text-align: left;
	font-size: 2.5rem;
`;
const PlayDuration = styled(PlayDescription)`
	padding: 0 1.5rem;
	font-size: 1.5rem;
	color: rgba(0, 15, 18, 0.87);
	width: 87%;
`;

const StopButton = styled(StopExerciseButton)`
	padding: 2rem 4rem;
	font-size: 3rem;
`;

const DEFAULT_IMAGE_URL =
	// "https://www.burnminute.com/images/burnminute-logo.png";
	"https://static6.depositphotos.com/1003098/570/i/450/depositphotos_5703104-stock-photo-jumping-jacks.jpg";

const handleExerciseStart = () => {
	const myFunction = (greeting: string, name: string) => {
		return `${greeting}, from ${name}!`;
	};

	const myGreeting = "Hello";
	const myName = "Me";

	const myDelayedFunctionCaller = async () => {
		const myDelayedResult = await asyncFunctionDelay(
			myFunction,
			2000,
			myGreeting,
			myName
		);
		console.log(myDelayedResult);
	};
	myDelayedFunctionCaller();

	// Route to exercise action page.
};

export interface IExercisePlay {
	exercise?: IExercise;
}

export const PlayContent: FC<IExercise> = (exercise) => {
	return (
		<DetailsContentWrapper>
			<DetailsHeaderWrapper>
				{exercise?.category || "Exercise"}
			</DetailsHeaderWrapper>
			<DetailsBodyWrapper>
				<DetailsTextWrapper>
					<PlayDescription>{exercise?.description}</PlayDescription>
					<PlayDuration>{exercise?.duration}</PlayDuration>
				</DetailsTextWrapper>
				<PlayImage
					src={exercise?.imageUrl || DEFAULT_IMAGE_URL}
					alt={exercise?.description}
				/>
			</DetailsBodyWrapper>
			<DetailsFooterWrapper>
				<Link to={`/exercises/${exercise?.id}`} title="Stop">
					<StopButton onClick={handleExerciseStart}>{`stop!`}</StopButton>
				</Link>
			</DetailsFooterWrapper>
		</DetailsContentWrapper>
	);
};

export const ExercisePlay: FC<IExercisePlay> = ({ children, exercise }) => {
	const previewContent = exercise ? (
		<PlayContent {...exercise} />
	) : (
		`Oops, that exercise wasn't found`
	);
	return (
		<PlayWrapper bgColor={exercise ? EXERCISE_BG_HIGHLIGHT_COLOR : undefined}>
			<CenteredContentWrapper>{previewContent}</CenteredContentWrapper>
		</PlayWrapper>
	);
};
