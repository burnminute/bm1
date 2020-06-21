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

const AvatarWrapper = styled.div`
	user-select: none;
	display: flex;
	flex-direction: column;
	padding: 0.25rem;
	border-radius: 0.25rem;
	background-color: rgba(251, 253, 255, 0.47);
	border: 0.125rem solid rgba(255, 138, 0, 0.47);
	min-width: 3rem;
	width: 3rem;
	min-height: 3rem;
	height: 3rem;
	color: rgba(255, 255, 255, 0.75);
	font-family: Oxygen, sans-serif;
	font-size: 0.75rem;
	justify-content: center;
	text-align: center;
	cursor: pointer;
`;

const SubHeaderWrapper = styled.div`
	padding: 0.75rem 0rem 0rem 0rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	overflow: hidden;
`;

const TopHeaderWrapper = styled.div`
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
			<TopHeaderWrapper>
				<LogoLink to="/">
					<BurnminuteLogoTitle />
				</LogoLink>
				<AvatarWrapper>
					<Link to="/account">{`Avatar Here`}</Link>
				</AvatarWrapper>
			</TopHeaderWrapper>
			<SubHeaderWrapper>
				<Breadcrumb breadcrumbTrail={breadcrumbTrail} />
				<NavMenu currentTitle={sectionTitle} />
			</SubHeaderWrapper>
		</ContentHeaderWrapper>
	);
};
