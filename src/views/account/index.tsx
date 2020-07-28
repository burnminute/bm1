import React, { FC } from "react";
import { LoginForm } from "./login-form";
import { View } from "../../components/layout/view";
import { ILinkElement } from "../../config/definitions";

const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

export const AccountView: FC = () => {
	// const [currentExercise, settCurrentExercise] = useState();
	return (
		<View
			breadcrumbTrail={breadcrumb}
			sectionTitle={`Account`}
			contentTitle={`User Login`}
		>
			<LoginForm />
		</View>
	);
};
