import React, { FC, useState } from "react";
import { ContentTitle, PanelView } from "../../components/layout";
import { IContentPanel, IExercise } from "../../config/definitions";
import { ExerciseList } from "../exercise-list/list";
import { ExercisePreview } from "../exercise-details/preview";

const getHomePanels = (
	handleExerciseSelection: (selectedItem: IExercise) => void,
	currentExercise?: IExercise
): IContentPanel[] => [
	{
		background: "rgba(247, 255, 248, 0.93);",
		contentTitle: (
			<ContentTitle color={"rgba(56,99,49,1)"}>{"Workout"}</ContentTitle>
		),
		children: <ExercisePreview exercise={currentExercise} />,
	},
	{
		background: "rgba(255, 253, 254, 0.79);",
		contentTitle: "Plan",
		children: (
			<ExerciseList
				autoSelectFirstItem
				onSelectExercise={handleExerciseSelection}
			/>
		),
	},
	{
		background: "rgba(245, 246, 255, 0.67);",
		contentTitle: (
			<ContentTitle color={"rgba(49,63,99,1)"}>{"Feed"}</ContentTitle>
		),
		children: <div>{`Friend Feed`}</div>,
	},
];

export const HomeView: FC = () => {
	// TODO: update to use recoil
	const [currentExercise, setCurrentExercise] = useState<IExercise>();
	const handleExerciseSelection = (selectedItem: IExercise) => {
		setCurrentExercise(selectedItem);
	};
	return (
		<PanelView
			panels={getHomePanels(handleExerciseSelection, currentExercise)}
		/>
	);
};
