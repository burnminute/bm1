import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IPlan, IListItem } from "../../config/definitions";
import { PLAN_BG_HIGHLIGHT_COLOR } from "./index";

export const ListItemWrapper = styled.div<IListItem>`
	background-color: ${(props) =>
		props.selected ? PLAN_BG_HIGHLIGHT_COLOR : `rgba(213, 223, 233, 0.1)`};
	&:hover {
		background-color: rgba(243, 253, 253, 0.3);
	}
	padding: 1rem;
`;

export interface IPlanListItemProps extends IListItem {
	plan: IPlan;
	onSelect?: (plan: IPlan) => void;
}

export const PlanListItem: FC<IPlanListItemProps> = ({
	plan,
	onSelect,
	selected,
}) => {
	const handleRowClick = (evt: React.MouseEvent<HTMLElement>) => {
		evt.stopPropagation();

		if (onSelect) {
			onSelect(plan);
		}
	};

	return (
		<ListItemWrapper key={plan.id} onClick={handleRowClick} selected={selected}>
			{plan.id}
			<br />
			{plan.category}
			<br />
			{plan.title}: <Link to={`/plans/${plan.id}`}>{plan.description}</Link>
			<br />
			{plan.frequency} {` reps`}
			<br />
			{plan.dateStart} - {plan.dateEnd}
		</ListItemWrapper>
	);
};
