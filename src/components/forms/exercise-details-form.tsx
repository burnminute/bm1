import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { updateExerciseMutation } from "../../gql/exercises";
import { CenteredContentWrapper } from "../layout/";
import { IExercise, Exercise } from "../../config/definitions";
import { CancelButton, StartButton } from "../../components/buttons";

const DetailsForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	border-radius: 0.25rem;
	background-color: rgba(251, 253, 255, 0.87);
	border: 0.125rem solid white;
	height: fit-content;
	/* color: #3e468a; */
`;

const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const TextInput = styled.input`
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

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
`;

const InputLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 1.25rem;
	font-family: Rubik, sans-serif;
	color: rgba(62, 70, 138, 0.87);
`;

export interface IExerciseDetailsFormProps {
	details: IExercise;
}

export const ExerciseDetailsForm: FC<IExerciseDetailsFormProps> = ({
	details,
}) => {
	const [updateExercise] = useMutation(updateExerciseMutation);

	const { handleSubmit, register, errors } = useForm<Exercise>();

	const onSubmit = async (values: IExercise) => {
		console.log(`form values: ${JSON.stringify(values)}`);
		await updateExercise({ variables: { ...values } });
	};

	const history = useHistory();
	const handleCancel = () => {
		history.goBack();
	};

	const { date, description, duration, category, id, username } = details;

	return (
		<CenteredContentWrapper>
			<DetailsForm onSubmit={handleSubmit(onSubmit)}>
				<TextInput
					disabled
					name="id"
					required
					ref={register}
					defaultValue={id}
				/>
				<TextInput
					disabled
					name="date"
					required
					ref={register}
					defaultValue={date}
				/>
				<InputWrapper title="user">
					<InputLabel>
						{`user`}
						<TextInput
							name="username"
							required
							ref={register}
							defaultValue={username}
						/>
						{errors.username && errors.username.message}
					</InputLabel>
				</InputWrapper>

				<InputWrapper title="category">
					<InputLabel>
						{`category`}
						<TextInput name="category" defaultValue={category} ref={register} />
					</InputLabel>
				</InputWrapper>

				<InputWrapper title="description">
					<InputLabel>
						{`description`}
						<TextInput
							name="description"
							required
							ref={register}
							defaultValue={description}
						/>
						{errors.description && errors.description.message}
					</InputLabel>
				</InputWrapper>

				<InputWrapper title="duration">
					<InputLabel>
						{`duration`}
						<TextInput name="duration" ref={register} defaultValue={duration} />
						{errors.duration && errors.duration.message}
					</InputLabel>
				</InputWrapper>

				<ButtonRow>
					<CancelButton onClick={handleCancel}>Cancel</CancelButton>
					<StartButton type="submit">Save</StartButton>
				</ButtonRow>
			</DetailsForm>
		</CenteredContentWrapper>
	);
};
