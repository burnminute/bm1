
import React, { FC } from "react";
import { ExerciseList } from "./list";
import { View } from "../../components/layout/view";
import { IExercise, ILinkElement } from "../../config/definitions";

interface IWebserviceCommandResponse {
	exercises: IExercise;
}

const breadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
]

export const ExerciseListView: FC = () => {
	return (
		<View breadcrumbTrail={breadcrumb} sectionTitle={`Activity`} contentTitle={`Exercise List`}>
			<ExerciseList />
		</View>
	)
}
