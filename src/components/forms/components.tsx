import React, { FC } from "react";
import styled from "styled-components";
import { CenteredContentWrapper } from "../layout/";
import { CancelButton, StartButton } from "../buttons";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	border-radius: 0.25rem;
	background-color: rgba(251, 253, 255, 0.87);
	border: 0.125rem solid white;
	height: fit-content;
	/* color: #3e468a; */
`;

export const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const TextInput = styled.input`
	border-radius: 0.125rem;
	background-color: rgba(251, 253, 255, 0.87);
	border: 0.125rem solid rgba(1, 3, 5, 0.1);
	height: 2.5rem;
	font-size: 1.25rem;
	font-family: Oxygen, sans-serif;
	color: #221111;
	padding: 0 1rem;
	margin-top: 0.5rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
`;

export const InputLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 1.25rem;
	font-family: Rubik, sans-serif;
	color: rgba(62, 70, 138, 0.87);
`;
