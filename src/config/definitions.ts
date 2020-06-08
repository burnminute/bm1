export interface IExercise {
	date: string;
	description: string;
	duration: number;
	id?: string;
	username: string;
}

export type ExerciseKeys = keyof IExercise;

export type Exercise = Pick<IExercise, ExerciseKeys>;
