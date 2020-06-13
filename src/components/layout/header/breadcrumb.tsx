import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ILinkElement } from "../../../config/definitions";

export interface IBreadcrumb {
	breadcrumbTrail?: ILinkElement[];
}

const BreadcrumbLink = styled(Link)`
	color: #8F9899;
	text-decoration: none;
	font-family: Oxygen,sans-serif;
	padding-right: 0.75rem;
	:hover {
		color: #cccccc;
	}
`
const BreadcrumbNoLink = styled.div`
	color: #dddccc;
	text-decoration: none;
	font-family: Oxygen,sans-serif;
	padding-right: 0.75rem;
	cursor: default;
`

const BreadcrumbDivider = styled.div`
	color: #888999;
	text-decoration: none;
	font-family: Oxygen,sans-serif;
	padding-right: 0.75rem;
	user-select: none;
`

const BreadcrumbWrapper = styled.div`
	display: flex;
	flex-direction: row;
	overflow: hidden;
`

const renderBreadcrumbs = (breadcrumbTrail?: ILinkElement[]) => (
	<>
		{breadcrumbTrail?.map(({ label, path }, index) => {
			return (
				<>
					{path ? <BreadcrumbLink key={path} to={path}>
						{label}
					</BreadcrumbLink>
						: <BreadcrumbNoLink key={path}>
							{label}
						</BreadcrumbNoLink>}
					{index < breadcrumbTrail.length - 1 && <BreadcrumbDivider>{`/`}</BreadcrumbDivider>}
				</>
			)
		})}
	</>
)

export const Breadcrumb: FC<IBreadcrumb> = ({ breadcrumbTrail }) => {
	return (
		<BreadcrumbWrapper>
			{renderBreadcrumbs(breadcrumbTrail)}
		</BreadcrumbWrapper>
	)
};
