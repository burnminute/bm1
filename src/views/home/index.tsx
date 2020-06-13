
import React, { FC } from "react";
import { View } from "../../components/layout/view";
import { IExercise } from "../../config/definitions";

interface IWebserviceCommandResponse {
	exercises: IExercise;
}

export const HomeView: FC = () => {
	return (
		<View contentTitle={`Home`}>
			{`Home`}
		</View>
	)
}
