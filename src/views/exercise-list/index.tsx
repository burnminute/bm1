import React, { FC, useState } from "react";
import styled from "styled-components";
import { ExerciseList } from "./list";
import { ExercisePreview } from "../exercise-details/preview";
import { View } from "../../components/layout/view";
import { IExercise, ILinkElement } from "../../config/definitions";

const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

export const ExerciseListView: FC = () => {
	const [currentExercise, settCurrentExercise] = useState();
	return (
		<View
			breadcrumbTrail={breadcrumb}
			sectionTitle={`Plan`}
			contentTitle={`Exercise List`}
		>
			<ExerciseList />
			<ExercisePreview exercise={currentExercise} />
		</View>
	);
};
