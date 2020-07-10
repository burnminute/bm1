import React, { FC } from "react";
import { ContentTitle, PanelView, View } from "../../components/layout";
import { IContentPanel } from "../../config/definitions";
import { ExerciseList } from "../exercise-list/list";

const homePanels: IContentPanel[] = [
	{
		background: "rgba(247, 255, 248, 0.93);",
		contentTitle: (
			<ContentTitle color={"rgba(56,99,49,1)"}>{"Workout"}</ContentTitle>
		),
		children: <div>{`Start Workout!`}</div>,
	},
	{
		background: "rgba(255, 253, 254, 0.79);",
		contentTitle: "Plan",
		children: <ExerciseList />,
	},
	{
		background: "rgba(245, 246, 255, 0.87);",
		contentTitle: (
			<ContentTitle color={"rgba(49,63,99,1)"}>{"Feed"}</ContentTitle>
		),
		children: <div>{`Friend Feed`}</div>,
	},
];
export const HomeView: FC = () => {
	return <PanelView panels={homePanels} />;
};
