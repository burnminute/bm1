import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { IExercise, Exercise } from "../../config/definitions";
import { StartButton } from "../../components/buttons";

export interface IExerciseDetailsFormProps {
	details: IExercise;
}

export const ExerciseDetailsForm: FC<IExerciseDetailsFormProps> = ({ details }) => {
	const { handleSubmit, register, errors } = useForm<Exercise>();
	const onSubmit = (values: IExercise) => console.log(values);

	const {
		date,
		description,
		duration,
		id,
		username
	} = details;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{id && id}
			<br />
			{date && date}
			<br />

			{/* <input
		  name="email"
		  ref={register({
			required: "Required",
			pattern: {
			  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			  message: "invalid email address"
			}
		  })}
		/>
		{errors.email && errors.email.message} */}

			<input
				name="username"
				required
				ref={register({
					validate: value => value !== "admin" || "Nice try!"
				})}
				defaultValue={username}
			/>
			{errors.username && errors.username.message}

			<input
				name="description"
				// ref={register({
				// 	validate: value => value !== "admin" || "Nice try!"
				// })}
				defaultValue={description}
			/>
			{errors.description && errors.description.message}

			<input
				name="duration"
				ref={register({
					required: true,
					pattern: {
						value: /^\d+$/,
						message: "Reps must be numeric"
					}
				})}
				defaultValue={duration}
			/>
			{errors.duration && errors.duration.message}

			<StartButton type="submit">Save</StartButton>
		</form>
	);
}
