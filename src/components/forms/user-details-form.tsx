import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { createUserMutation, updateUserMutation } from "../../gql/user";
import { CenteredContentWrapper } from "../layout/";
import { IUser, User } from "../../config/definitions";
import { CancelButton, StartButton } from "../../components/buttons";
import {
	ButtonRow,
	FormContainer,
	InputLabel,
	InputWrapper,
	TextInput,
} from "../forms/components";

export interface IUserDetailsFormProps {
	details?: IUser;
}

export const UserDetailsForm: FC<IUserDetailsFormProps> = ({ details }) => {
	const [createUser] = useMutation(createUserMutation);
	const [updateUser] = useMutation(updateUserMutation);

	const { handleSubmit, register, errors } = useForm<User>();

	const onSubmit = async (values: IUser) => {
		console.log(`form values: ${JSON.stringify(values)}`);
		const mutationOptions = {
			variables: { ...values },
			refetchQueries: () => ["getUserDetailsQuery"],
		};
		if (details) {
			await updateUser(mutationOptions);
		} else {
			await createUser(mutationOptions);
		}
	};

	const history = useHistory();
	const handleCancel = () => {
		history.goBack();
	};

	const { email, fullName, id, password, username } = details || {};

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
				<InputWrapper title="Full Name">
					<InputLabel>
						{`Full Name`}
						<TextInput
							name="fullName"
							required
							ref={register}
							defaultValue={fullName}
						/>
						{errors.fullName && errors.fullName.message}
					</InputLabel>
				</InputWrapper>
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

				<InputWrapper title="password">
					<InputLabel>
						{`password`}
						<TextInput name="password" defaultValue={password} ref={register} />
					</InputLabel>
				</InputWrapper>

				<InputWrapper title="email">
					<InputLabel>
						{`email`}
						<TextInput
							name="email"
							required
							ref={register}
							defaultValue={email}
						/>
						{errors.email && errors.email.message}
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
