import React, { FC, useState } from "react";
import styled from "styled-components";
import { ExerciseList } from "./list";
import { ExercisePreview } from "../exercise-details/preview";
import { PanelView, View } from "../../components/layout/view";
import { IContent, IExercise, ILinkElement } from "../../config/definitions";

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
	const exercisePanels: IContent[] = [
		{
			contentTitle: "Exercise List",
			children: <ExerciseList onSelect={handleListSelection} />,
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
