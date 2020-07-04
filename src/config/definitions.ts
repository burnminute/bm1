import { ReactNode } from "react";

export interface IContent {
	contentTitle?: string | ReactNode;
	children?: ReactNode;
}

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

export interface IUser {
	email?: string;
	fullName: string;
	id?: string;
	password?: string;
	username: string;
}

export type UserKeys = keyof IUser;

export type User = Pick<IUser, UserKeys>;
