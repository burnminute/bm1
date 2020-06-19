import React, { FC, useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./login-form";
import { View } from "../../components/layout/view";
import { IExercise, ILinkElement } from "../../config/definitions";

const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

export const ExerciseListView: FC = () => {
	const [currentExercise, settCurrentExercise] = useState();
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
