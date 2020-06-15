export interface IDimensions {
	width?: number;
	height?: number;
}

export interface ILinkElement {
	label: string;
	path: string;
}

export interface IExercise {
	date: string;
	description: string;
	duration?: string;
	category?: string;
	id?: string;
	username: string;
}

export type ExerciseKeys = keyof IExercise;

export type Exercise = Pick<IExercise, ExerciseKeys>;
