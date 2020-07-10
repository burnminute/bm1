import React, { FC, useState } from "react";
import styled from "styled-components";
import { ExerciseList } from "./list";
import { ExercisePreview } from "../exercise-details/preview";
import { PanelView, View } from "../../components/layout/view";
import {
	IContentPanel,
	IExercise,
	ILinkElement,
} from "../../config/definitions";

const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

export interface IExerciseListViewProps {
	selectedId?: string;
}

export const ExerciseListView: FC<IExerciseListViewProps> = ({
	selectedId,
}) => {
	const [currentExercise, setCurrentExercise] = useState<IExercise>();
	const handleListSelection = (selectedItem: IExercise) => {
		setCurrentExercise(selectedItem);
	};
	const exercisePanels: IContentPanel[] = [
		{
			children: <ExerciseList onSelect={handleListSelection} />,
			contentTitle: "Exercise List",
			pctWidth: 37,
		},
		{
			children: <ExercisePreview exercise={currentExercise} />,
			pctWidth: 63,
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
