import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ILinkElement } from "../../../config/definitions";

const defaultNavMenuItems: ILinkElement[] = [
	{ label: "Activity", path: "/exercises" },
	{ label: "Plan", path: "/plan" },
	{ label: "Feed", path: "/feed" },
];

export interface INavMenu {
	navMenuItems?: ILinkElement[];
}

const NavMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	z-index: 100;
	position: absolute;
	right: 0rem;
	top: 7.75rem;
`;

const NavMenuLink = styled(Link)`
	color: #334455;
	text-decoration: none;
	font-family: Oxygen, sans-serif;
	padding-right: 0.75rem;
	:hover {
		color: #112233;
	}
`;

const NavMenuItem = styled.div`
	background-color: rgba(247, 250, 255, 0.57);
	font-family: Oxygen, sans-serif;
	padding: 0.75rem;
	border-radius: 0.125rem;
	margin-bottom: 0.125rem;
	width: 7rem;
`;

const renderNavMenu = (navMenuItems?: ILinkElement[]) => (
	<>
		{navMenuItems?.map(({ label, path }, index) => {
			return (
				<NavMenuItem key={index}>
					<NavMenuLink to={path}>{label}</NavMenuLink>
				</NavMenuItem>
			);
		})}
	</>
);

export const NavMenu: FC<INavMenu> = ({ navMenuItems }) => {
	return <NavMenuWrapper>{renderNavMenu(navMenuItems)}</NavMenuWrapper>;
};

NavMenu.defaultProps = { navMenuItems: defaultNavMenuItems };
