import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { View } from "../../components/layout/view";
import { UserDetailsForm } from "../../components/forms/user-details-form";
import { IUser, ILinkElement } from "../../config/definitions";
import { LoadingAnimation } from "../../components/layout/loading-animation";
import { getUserDetailsQuery } from "../../gql/user";

export interface IUserDetailsViewEdit {
	users: IUser;
}

const baseBreadcrumb: ILinkElement[] = [
	{ label: "Home", path: "/" },
	{ label: "User List", path: "/users" },
];
let breadcrumb = baseBreadcrumb.concat();

export const UserDetailsViewEdit: FC = () => {
	const { id } = useParams();
	const userId: string = id || "new";
	let details: IUser = {
		username: "",
		email: "",
		password: "",
		fullName: "",
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

		breadcrumb = [
			...baseBreadcrumb,
			{ label: details.username, path: `/users/${details.id}` },
		];

		content = (
			<>
				<UserDetailsForm details={details} />
			</>
		);
	}

	return (
		<View
			breadcrumbTrail={breadcrumb}
			sectionTitle={`Account`}
			contentTitle={`Edit '${details.username}'` || ""}
		>
			{content}
		</View>
	);
};
