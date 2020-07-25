import React, { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { ExerciseDetailsForm } from "../../components/forms/exercise-details-form";
import { ExercisePreview } from "./preview";
import { ExercisePlay } from "./play";
import { IExercise, ILinkElement } from "../../config/definitions";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { getExerciseDetailsQuery } from "../../gql/exercise";

const DetailsTitle = styled.div`
	font-family: Quantico, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 1.75rem;
	line-height: 2.5rem;
	text-decoration-line: underline;
	color: #328294;
`;

const DetailsDuration = styled.div`
	font-family: Quantico, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	line-height: 2rem;
	color: #103200;
`;

export interface IExerciseDetailsView {
	exercises: IExercise;
}

// const breadcrumb: ILinkElement[] = [
// 	{ label: "Home", path: "/" },
// 	{ label: "Exercise List", path: "/exercises" },
// ];

const baseBreadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
	{ label: "Exercise List", path: "/exercises" },
];
let breadcrumb = baseBreadcrumb.concat();

export const ExerciseDetailsView: FC = () => {
	const [activityStarted, setActivityStarted] = useState(false);
	const { id, action } = useParams();
	const { pathname } = useLocation();
	const exerciseId: string = id || "new";
	let details: IExercise = {
		username: "",
		description: "",
		duration: "",
		date: "",
	};

	const { loading, error, data } = useQuery(getExerciseDetailsQuery, {
		variables: { id: exerciseId },
	});

	/*
	 * Log the user starting this exercise (unless already begun within the plan timeframe)
	 * Start plan timer for the next exercise.
	 */
	useEffect(() => {
		if (data?.exerciseDetails?.description) {
			console.log("starting exercise");
		}
	}, [data]);

	let content = <LoadingAnimation />;

	if (loading) {
		content = <LoadingAnimation />;
	} else if (error) {
		content = <div>{`No exercise was found`}</div>;
	} else {
		const { exerciseDetails } = data;
		details = exerciseDetails;

		const { date, description, duration, category, username } = details;

		// Switch content by function
		switch (action) {
			case "edit": {
				breadcrumb = [
					...baseBreadcrumb,
					{ label: details.description, path: `/exercises/${details.id}` },
				];

				content = (
					<>
						<ExerciseDetailsForm details={details} />
					</>
				);
				break;
			}
			case "start": {
				content = <ExercisePlay exercise={details} />;
				break;
			}
			default: {
				content = (
					<div>
						{/* <div>{id}</div> */}
						{/* <DetailsTitle>{description}</DetailsTitle>
						<DetailsDuration> {`[${duration}]`}</DetailsDuration> */}
						{/* <div>{username}</div> */}
						{/* <div>{date}</div> */}
						{/* {activityStarted && <div>{`Stop`}</div>} */}
						{/* {!activityStarted && <div>{`Start!`}</div>} */}
						{/* <div>{`Start!`}</div> */}
						<ExercisePreview exercise={details} />
					</div>
				);
			}
		}
	}

	return (
		<View
			breadcrumbTrail={breadcrumb}
			contentTitle={details.description || ""}
			sectionTitle={`Activity`}
		>
			{content}
		</View>
	);
};
