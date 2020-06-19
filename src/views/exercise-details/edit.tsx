import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { ExerciseDetailsForm } from "../../components/forms/exercise-details-form";
import { IExercise, ILinkElement } from "../../config/definitions";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { getExerciseDetailsQuery } from "../../gql/exercise";

export interface IExerciseDetailsViewEdit {
	exercises: IExercise;
}

const baseBreadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
	{ label: "Exercise List", path: "/exercises" },
];
let breadcrumb = baseBreadcrumb.concat();

export const ExerciseDetailsViewEdit: FC = () => {
	const { id } = useParams();
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

	let content = <LoadingAnimation />;

	if (loading) {
		content = <LoadingAnimation />;
	} else if (error) {
		content = (
			<p>
				Error :(
				<br />
				{JSON.stringify(error)}
			</p>
		);
	} else {
		const { exerciseDetails } = data;
		details = exerciseDetails;

		breadcrumb = [
			...baseBreadcrumb,
			{ label: details.description, path: `/exercises/${details.id}` },
		];

		content = (
			<>
				<ExerciseDetailsForm details={details} />
			</>
		);
	}

	return (
		<View
			breadcrumbTrail={breadcrumb}
			sectionTitle={`Activity`}
			contentTitle={`Edit '${details.description}'` || ""}
		>
			{content}
		</View>
	);
};
