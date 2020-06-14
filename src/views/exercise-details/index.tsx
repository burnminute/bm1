import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link, useLocation, useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { EditIcon } from "../../components/icons/edit";
import { IExercise, ILinkElement } from "../../config/definitions";
import { LoadingAnimation } from "../../components/layout/loading-animation";

export interface IExerciseDetailsView {
	exercises: IExercise;
}

const breadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
	{ label: "Exercise List", path: "/exercises" }
];

export const ExerciseDetailsView: FC = () => {
	const { id } = useParams();
	const { pathname } = useLocation();
	const exerciseId: string = id || "new";
	let details: IExercise = { username: "", description: "", duration: 0, date: "" };

	const { loading, error, data } = useQuery(gql`
		  query getExerciseDetails($id: String!) {
			exerciseDetails(id:$id) {
			  id
			  username
			  description
			  duration
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
			username
		} = details;

		content = (<>
			<div>{id}</div>
			<div>{description} {duration}</div>
			<div>{username}</div>
			<div>{date}</div>
			<Link to={`${pathname}/edit`} title="Edit"><EditIcon /></Link>
		</>);
	}

	return (
		<View breadcrumbTrail={breadcrumb} sectionTitle={`Activity`} contentTitle={details.description || ""}>
			{content}
		</View>
	);
}
