import React, { FC } from "react";
import styled from "styled-components";
import { Breadcrumb, IBreadcrumb } from "./breadcrumb";
import { BurnminuteLogoTitle } from "./logo-title";
import { NavMenu } from "./nav-menu";
import { Link } from "react-router-dom";

export interface IHeader extends IBreadcrumb {
	sectionTitle?: string;
}

export const ContentHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	height: 9rem;
	left: 2.5rem;
	right: 2.5rem;
	top: 2rem;
	background-color: transparent;
	background-image: url("./images/burnminute-logo-title.png");
	background-repeat: no-repeat;
`;

// const SectionTitle = styled.div`
// 	user-select: none;
// 	color: rgba(155, 191, 198, 0.5);
// 	font-family: Sunflower, sans-serif;
// 	font-size: 2rem;
// 	font-weight: bold;
// 	margin-top: -0.87rem;
// 	margin-right: 3.5rem;
// 	text-transform: lowercase;
// `;

const SubHeaderWrapper = styled.div`
	padding: 0.75rem 0rem 0rem 0rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	overflow: hidden;
`;

const LogoLink = styled(Link)`
	width: fit-content;
`;

export const Header: FC<IHeader> = ({ breadcrumbTrail, sectionTitle }) => {
	return (
		<ContentHeaderWrapper>
			<LogoLink to="/">
				<BurnminuteLogoTitle />
			</LogoLink>
			<SubHeaderWrapper>
				<Breadcrumb breadcrumbTrail={breadcrumbTrail} />
				{/* <SectionTitle>{sectionTitle}</SectionTitle> */}
				<NavMenu currentTitle={sectionTitle} />
			</SubHeaderWrapper>
		</ContentHeaderWrapper>
	);
};
