import { ReactNode } from "react";

export interface IContent {
	contentTitle?: string | ReactNode;
	children?: ReactNode;
}

export interface IContentPanel extends IContent {
	pctWidth?: number;
	background?: string;
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
	imageUrl?: string;
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

export interface IPlan {
	active: boolean;
	category?: string;
	dateEnd?: string;
	dateStart: string;
	description?: string;
	exercises?: IExercise[];
	frequency?: string; // need IFrequency
	id?: string;
	title: string;
	privacy: string; // need IPrivacy
	userId: string;
}

export interface IListItem {
	selected?: boolean;
}

export interface IBgColor {
	bgColor?: string;
}
