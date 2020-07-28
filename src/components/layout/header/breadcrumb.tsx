import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ILinkElement } from "../../../config/definitions";

export interface IBreadcrumb {
	breadcrumbTrail?: ILinkElement[];
}

const BreadcrumbLink = styled(Link)`
	color: #8f9899;
	text-decoration: none;
	font-family: Oxygen, sans-serif;
	padding-right: 0.75rem;
	:hover {
		color: #cccccc;
	}
`;
const BreadcrumbNoLink = styled.div`
	color: #dddccc;
	text-decoration: none;
	font-family: Oxygen, sans-serif;
	padding-right: 0.75rem;
	cursor: default;
`;

const BreadcrumbDivider = styled.div`
	color: #888999;
	text-decoration: none;
	font-family: Oxygen, sans-serif;
	padding-right: 0.75rem;
	user-select: none;
`;

const BreadcrumbWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 1.5rem;
	overflow: hidden;
`;

const renderBreadcrumbs = (breadcrumbTrail?: ILinkElement[]) => (
	<>
		{breadcrumbTrail?.map(({ label, path }, index) => {
			return (
				<Fragment key={index}>
					{path ? (
						<BreadcrumbLink to={path}>{label}</BreadcrumbLink>
					) : (
						<BreadcrumbNoLink>{label}</BreadcrumbNoLink>
					)}
					{index < breadcrumbTrail.length - 1 && (
						<BreadcrumbDivider>{`/`}</BreadcrumbDivider>
					)}
				</Fragment>
			);
		})}
	</>
);

export const Breadcrumb: FC<IBreadcrumb> = ({ breadcrumbTrail }) => {
	return (
		<BreadcrumbWrapper>{renderBreadcrumbs(breadcrumbTrail)}</BreadcrumbWrapper>
	);
};
