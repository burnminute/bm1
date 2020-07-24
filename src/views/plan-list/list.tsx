import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { IPlan } from "../../config/definitions";
import { getPlanListQuery } from "../../gql/plan";
import { PlanListItem } from "./item";

interface IResponse {
	planList: IPlan[];
}

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
`;

export interface IPlanListProps {
	onSelect?: (plan: IPlan) => void;
	selectedId?: string;
}

export const PlanList: FC<IPlanListProps> = ({ onSelect, selectedId }) => {
	const { loading, error, data } = useQuery(getPlanListQuery);

	if (loading) return <LoadingAnimation />;
	if (error)
		return (
			<p>
				Error :(
				<br />
				{error}
			</p>
		);

	return (
		<ListWrapper>
			{data?.planList?.map((plan: IPlan) => (
				<PlanListItem
					selected={plan?.id === selectedId}
					plan={plan}
					onSelect={onSelect}
					key={plan.id}
				/>
			))}
		</ListWrapper>
	);
};
