import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import {
	createExerciseMutation,
	updateExerciseMutation,
} from "../../gql/exercise";
import { CenteredContentWrapper } from "../layout/";
import { IExercise, Exercise } from "../../config/definitions";
import { CancelButton, StartButton } from "../../components/buttons";
import {
	ButtonRow,
	FormContainer,
	InputLabel,
	InputWrapper,
	TextInput,
} from "../forms/components";

export interface IExerciseDetailsFormProps {
	details?: IExercise;
}

export const ExerciseDetailsForm: FC<IExerciseDetailsFormProps> = ({
	details,
}) => {
	const [createExercise] = useMutation(createExerciseMutation);
	const [updateExercise] = useMutation(updateExerciseMutation);

	const { handleSubmit, register, errors } = useForm<Exercise>();

	const onSubmit = async (values: IExercise) => {
		console.log(`form values: ${JSON.stringify(values)}`);
		const mutationOptions = {
			variables: { ...values },
			refetchQueries: () => ["getExerciseDetailsQuery"],
		};
		if (details) {
			await updateExercise(mutationOptions);
		} else {
			await createExercise(mutationOptions);
		}
	};

	const history = useHistory();
	const handleCancel = () => {
		history.goBack();
	};

	const { date, description, duration, category, id, username } = details || {};

	return (
		<CenteredContentWrapper>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
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
			</FormContainer>
		</CenteredContentWrapper>
	);
};
