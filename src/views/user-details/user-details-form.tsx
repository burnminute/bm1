import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { updateUserMutation } from "../../gql/user";
import { CenteredContentWrapper } from "../../components/layout";
import { IUser, User } from "../../config/definitions";
import { CancelButton, StartButton } from "../../components/buttons";
import {
	ButtonRow,
	FormContainer,
	InputLabel,
	InputWrapper,
	TextInput,
} from "../../components/forms/components";

export interface ILoginFormProps {
	details: IUser;
}

export const LoginForm: FC<ILoginFormProps> = ({ details }) => {
	const [updateUser] = useMutation(updateUserMutation);

	const { handleSubmit, register, errors } = useForm<User>();

	const onSubmit = async (values: IUser) => {
		console.log(`form values: ${JSON.stringify(values)}`);
		await updateUser({
			variables: { ...values },
			refetchQueries: () => ["getUserDetailsQuery"],
		});
	};

	const history = useHistory();
	const handleCancel = () => {
		history.goBack();
	};

	const { fullName, email, id, username } = details;

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

				<InputWrapper title="email">
					<InputLabel>
						{`email`}
						<TextInput name="email" defaultValue={email} ref={register} />
					</InputLabel>
				</InputWrapper>

				<InputWrapper title="fullName">
					<InputLabel>
						{`fullName`}
						<TextInput
							name="fullName"
							required
							ref={register}
							defaultValue={fullName}
						/>
						{errors.fullName && errors.fullName.message}
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
