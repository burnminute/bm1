import React, { FC } from "react";
import { ContentTitle, PanelView, View } from "../../components/layout";
import { IContent, IExercise } from "../../config/definitions";
import { ExerciseList } from "../exercise-list/list";

const homePanels: IContent[] = [
	{
		contentTitle: (
			<ContentTitle color={"rgba(56,99,49,1)"}>{"Workout"}</ContentTitle>
		),
		children: <div>{`Start Workout!`}</div>,
	},
	{ contentTitle: "Plan", children: <ExerciseList /> },
	{
		contentTitle: (
			<ContentTitle color={"rgba(49,63,99,1)"}>{"Feed"}</ContentTitle>
		),
		children: <div>{`Friend Feed`}</div>,
	},
];
export const HomeView: FC = () => {
	return <PanelView panels={homePanels} />;
};
