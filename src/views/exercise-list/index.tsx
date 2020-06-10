
import React, { FC } from "react";
import { IExercise } from "../../config/definitions";
import { ExerciseList } from "./list";
import { View } from "../../components/layout/view";

interface IWebserviceCommandResponse {
	exercises: IExercise;
}

export const ExerciseListView: FC = () => {
	return (
		<View>
			<ExerciseList />
		</View>
	)
}
