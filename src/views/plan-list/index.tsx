import React, { FC, useState } from "react";
import styled from "styled-components";
import { PlanList } from "./list";
// import { PlanPreview } from "../exercise-details/preview";
import { PanelView, View } from "../../components/layout/view";
import { IContentPanel, IPlan, ILinkElement } from "../../config/definitions";

export const PLAN_BG_HIGHLIGHT_COLOR: string = "rgba(243, 253, 253, 0.57)";
const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

export interface IPlanListViewProps {
	selectedId?: string;
}

export const PlanListView: FC<IPlanListViewProps> = ({ selectedId }) => {
	const [currentPlan, setCurrentPlan] = useState<IPlan>();
	const handleListSelection = (selectedItem: IPlan) => {
		setCurrentPlan(selectedItem);
	};
	const exercisePanels: IContentPanel[] = [
		{
			children: (
				<PlanList onSelect={handleListSelection} selectedId={currentPlan?.id} />
			),
			contentTitle: "Plan List",
			// pctWidth: 37,
		},
		// {
		// 	children: <PlanPreview exercise={currentPlan} />,
		// 	pctWidth: 63,
		// },
	];

	return (
		<PanelView
			panels={exercisePanels}
			sectionTitle={`Plan`}
			breadcrumbTrail={breadcrumb}
		/>
	);
};
