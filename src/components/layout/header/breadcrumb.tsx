import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadcrumbLink = styled(Link)`
	color: #eeefff;
	text-decoration: none;
`

const BreadcrumbWrapper = styled.div`
	padding: 0.75rem 1rem 1rem 0;
	width: 100%;
	display: flex;
	flex-direction: row;
`

export const Breadcrumb: FC = () => {
	return (
		<BreadcrumbWrapper>
			<BreadcrumbLink to="/">
				{`Home`}
			</BreadcrumbLink>
		</BreadcrumbWrapper>
	)
};
