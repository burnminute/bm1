import React, { FC, useState } from "react";
import styled from "styled-components";
import { ExerciseList } from "./list";
import { ExercisePreview } from "../exercise-details/preview";
import { PanelView, View } from "../../components/layout/view";
import { IContent, IExercise, ILinkElement } from "../../config/definitions";

const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

export const ExerciseListView: FC = () => {
	const [currentExercise, settCurrentExercise] = useState();
	const exercisePanels: IContent[] = [
		{
			contentTitle: "Exercise List",
			children: <ExerciseList />,
		},
		{
			children: <ExercisePreview exercise={currentExercise} />,
		},
	];

	return (
		<PanelView
			panels={exercisePanels}
			sectionTitle={`Plan`}
			breadcrumbTrail={breadcrumb}
		/>
	);
};
