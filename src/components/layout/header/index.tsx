import React, { FC } from "react";
import styled from "styled-components";
import { Breadcrumb, IBreadcrumb } from "./breadcrumb";
import { BurnminuteLogoTitle } from "./logo-title";
import { NavMenu } from "./nav-menu";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export interface IHeader extends IBreadcrumb {
	sectionTitle?: string;
}

export const ContentHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 8.5rem;
	background-color: transparent;
	background-image: url("./images/burnminute-logo-title.png");
	background-repeat: no-repeat;
	padding: 0.4rem;
	z-index: 1;
`;

const UserInfoWrapper = styled.div`
	user-select: none;
	display: flex;
	flex-direction: column;
	color: rgba(255, 255, 255, 0.75);
	font-family: Oxygen, sans-serif;
	font-size: 0.75rem;
	justify-content: start;
	text-align: center;
	cursor: pointer;
`;

const AvatarWrapper = styled.div`
	user-select: none;
	display: flex;
	flex-direction: column;
	padding: 0.125rem;
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

const AvatarLessWrapper = styled(AvatarWrapper)`
	background-color: rgba(251, 253, 255, 0.12);
	border: 0.125rem solid rgba(255, 138, 0, 0.17);
`;

const AvatarImage = styled.img`
	user-select: none;
	height: 2.75rem;
`;

const SubHeaderWrapper = styled.div`
	padding: 0.5rem 0rem 0rem 0rem;
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

const LoginLink = styled.div`
	color: rgba(251, 253, 255, 0.87);
`;
const LogoutLink = styled(LoginLink)`
	color: rgba(251, 253, 255, 0.67);
`;

export const Header: FC<IHeader> = ({ breadcrumbTrail, sectionTitle }) => {
	const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
	const handleLoginLink = () => {
		loginWithRedirect();
	};
	const handleLogoutLink = () => {
		logout();
	};

	const UserContent = isAuthenticated ? (
		<>
			<AvatarWrapper>
				<AvatarImage src={user.picture} alt={user.name} />
			</AvatarWrapper>
			<LogoutLink onClick={handleLogoutLink}>{`Logout`}</LogoutLink>
		</>
	) : (
		<AvatarLessWrapper onClick={handleLoginLink}>
			<LoginLink>{`Login`}</LoginLink>
		</AvatarLessWrapper>
	);

	return (
		<ContentHeaderWrapper>
			<TopHeaderWrapper>
				<LogoLink to="/">
					<BurnminuteLogoTitle />
				</LogoLink>
				<UserInfoWrapper>{UserContent}</UserInfoWrapper>
			</TopHeaderWrapper>
			<SubHeaderWrapper>
				<Breadcrumb breadcrumbTrail={breadcrumbTrail} />
				<NavMenu currentTitle={sectionTitle} />
			</SubHeaderWrapper>
		</ContentHeaderWrapper>
	);
};
