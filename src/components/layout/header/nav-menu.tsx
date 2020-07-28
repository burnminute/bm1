import React, { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ILinkElement } from "../../../config/definitions";
import { NavMenuToggleIcon } from "../../icons/nav-menu-toggle";

const defaultNavMenuItems: ILinkElement[] = [
	{ label: "Activity", path: "/exercises" },
	{ label: "Plan", path: "/exercises" },
	{ label: "Feed", path: "#" },
];

export interface INavMenu {
	navMenuItems?: ILinkElement[];
	currentTitle?: string;
}

const NavTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const NavMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	z-index: 100;
	position: absolute;
	right: 1.4rem;
	top: 6.25rem;
	width: 11.5rem;
`;

const NavMenuLink = styled(Link)`
	text-decoration: none;
	user-select: none;
	color: rgba(255, 255, 255, 0.75);
	font-family: Sunflower, sans-serif;
	font-size: 2rem;
	text-transform: lowercase;
	:hover {
		color: rgba(255, 255, 255, 0.95);
	}
`;

const NavMenuItem = styled.div`
	background-color: rgba(0, 98, 120, 0.87);
	:hover {
		background-color: rgba(0, 98, 120, 0.99);
	}
	padding: 0.3rem 3.5rem 0.3rem 1rem;
	border-radius: 0.125rem;
	margin-bottom: 0.125rem;
	margin-right: 0.125rem;
	text-align: right;
	box-shadow: 0 0.15rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
	margin-bottom: 0.125rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	cursor: pointer;
`;

interface IRenderNavMenuProps {
	navMenuItems: ILinkElement[];
	showMenu: boolean;
	handleMenuToggle(): void;
}

const MenuItemWrapper = styled("div")<IRenderNavMenuProps>`
	padding-top: 0.125rem;
	display: ${(props) => (props.showMenu ? "flex" : "none")};
	flex-direction: column;
	/* position: absolute;
	top: 8.5rem;
	right: 4.25rem;
	z-index: 101; */
`;

const SectionTitle = styled.div`
	user-select: none;
	color: rgba(155, 191, 198, 0.5);
	font-family: Sunflower, sans-serif;
	font-size: 2rem;
	font-weight: bold;
	padding-right: 1rem;
	text-transform: lowercase;
`;

export const NavMenu: FC<INavMenu> = ({ navMenuItems = [], currentTitle }) => {
	const [menuVisibility, setMenuVisibility] = useState(false);
	const handleMenuToggle = () => {
		setMenuVisibility(!menuVisibility);
	};
	return (
		<NavMenuWrapper>
			<NavTitleWrapper onClick={handleMenuToggle}>
				<SectionTitle>{currentTitle}</SectionTitle>
				<IconWrapper title="Navigation Menu">
					<NavMenuToggleIcon />
				</IconWrapper>
			</NavTitleWrapper>
			{menuVisibility && (
				<MenuItemWrapper
					showMenu
					navMenuItems={navMenuItems}
					handleMenuToggle={handleMenuToggle}
				>
					{(navMenuItems || []).map(({ label, path }, index) => {
						return (
							<NavMenuLink to={path} key={index} title={label}>
								<NavMenuItem onClick={handleMenuToggle}>{label}</NavMenuItem>
							</NavMenuLink>
						);
					})}
				</MenuItemWrapper>
			)}
		</NavMenuWrapper>
	);
};

NavMenu.defaultProps = {
	navMenuItems: defaultNavMenuItems,
	currentTitle: "home",
};
