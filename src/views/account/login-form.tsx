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
	details?: IUser;
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

	const { fullName, password, id, username } = details || { details: {} };

	return (
		<CenteredContentWrapper>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
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

				<ButtonRow>
					<CancelButton onClick={handleCancel}>Cancel</CancelButton>
					<StartButton type="submit">Save</StartButton>
				</ButtonRow>
			</FormContainer>
		</CenteredContentWrapper>
	);
};

LoginForm.defaultProps = {
	details: { id: "", username: "", fullName: "", password: "" },
};
