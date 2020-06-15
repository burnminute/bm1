import React, { FC, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { EditIcon } from "../../components/icons/edit";
import { IExercise, ILinkElement } from "../../config/definitions";
import { LoadingAnimation } from "../../components/layout/loading-animation";

const DetailsTitle = styled.div`
	font-family: Quantico;
	font-style: normal;
	font-weight: bold;
	font-size: 1.75rem;
	line-height: 2.5rem;
	text-decoration-line: underline;
	color: #328294;
`

const DetailsDuration = styled.div`
	font-family: Quantico;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	line-height: 2rem;
	color: #103200;
`

export interface IExerciseDetailsView {
	exercises: IExercise;
}

const breadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
	{ label: "Exercise List", path: "/exercises" }
];

export const ExerciseDetailsView: FC = () => {
	const [activityStarted, setActivityStarted] = useState(false);
	const { id } = useParams();
	const { pathname } = useLocation();
	const exerciseId: string = id || "new";
	let details: IExercise = { username: "", description: "", duration: "", date: "" };

	const { loading, error, data } = useQuery(gql`
		  query getExerciseDetails($id: String!) {
			exerciseDetails(id:$id) {
			  id
			  username
			  description
			  duration
			  category
			  date
			}
		  }
		`, { variables: { id: exerciseId } });

	let content = (<LoadingAnimation />);

	if (loading) {
		content = (<LoadingAnimation />)
	}
	else if (error) {
		content = (<p>Error :(<br />
			{JSON.stringify(error)}
		</p>)
	}
	else {
		const { exerciseDetails } = data;
		details = exerciseDetails;

		const {
			date,
			description,
			duration,
			category,
			username
		} = details;

		content = (<>
			{/* <div>{id}</div> */}
			<DetailsTitle>{description}</DetailsTitle>
			<DetailsDuration> {`[${duration}]`}</DetailsDuration>
			{/* <div>{username}</div> */}
			{/* <div>{date}</div> */}
			{activityStarted && <div>{`Stop`}</div>}
			{!activityStarted && <div>{`Start!`}</div>}
			<Link to={`${pathname}/edit`} title="Edit"><EditIcon /></Link>
		</>);
	}

	return (
		<View breadcrumbTrail={breadcrumb} sectionTitle={`Activity`} contentTitle={details.description || ""}>
			{content}
		</View>
	);
}
