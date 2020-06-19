import React, { FC, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { EditIcon } from "../../components/icons/edit";
import { IUser, ILinkElement } from "../../config/definitions";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { getUserDetailsQuery } from "../../gql/user";

const DetailsTitle = styled.div`
	font-family: Quantico;
	font-style: normal;
	font-weight: bold;
	font-size: 1.75rem;
	line-height: 2.5rem;
	text-decoration-line: underline;
	color: #328294;
`;

const DetailsDuration = styled.div`
	font-family: Quantico;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	line-height: 2rem;
	color: #103200;
`;

export interface IUserDetailsView {
	users: IUser;
}

const breadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
	{ label: "User List", path: "/users" },
];

export const UserDetailsView: FC = () => {
	const [activityStarted, setActivityStarted] = useState(false);
	const { id } = useParams();
	const { pathname } = useLocation();
	const userId: string = id || "new";
	let details: IUser = {
		username: "",
		fullName: "",
		email: "",
	};

	const { loading, error, data } = useQuery(getUserDetailsQuery, {
		variables: { id: userId },
	});

	let content = <LoadingAnimation />;

	if (loading) {
		content = <LoadingAnimation />;
	} else if (error) {
		content = (
			<p>
				Error :(
				<br />
				{JSON.stringify(error)}
			</p>
		);
	} else {
		const { userDetails } = data;
		details = userDetails;

		const { id, fullName, email, username } = details;

		content = (
			<>
				<div>{id}</div>
				<DetailsTitle>{fullName}</DetailsTitle>
				<DetailsDuration> {`[${email}]`}</DetailsDuration>
				<div>{username}</div>
				{activityStarted && <div>{`Stop`}</div>}
				{!activityStarted && <div>{`Start!`}</div>}
				<Link to={`${pathname}/edit`} title="Edit">
					<EditIcon />
				</Link>
			</>
		);
	}

	return (
		<View
			breadcrumbTrail={breadcrumb}
			contentTitle={details.fullName || ""}
			sectionTitle={`Activity`}
		>
			{content}
		</View>
	);
};
