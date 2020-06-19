import gql from "graphql-tag";

export const getExerciseListQuery = gql`
	query getExerciseList {
		exerciseList {
			category
			date
			description
			duration
			id
			username
		}
	}
`;

export const getExerciseDetailsQuery = gql`
	query getExerciseDetails($id: String!) {
		exerciseDetails(id: $id) {
			category
			date
			description
			duration
			id
			username
		}
	}
`;

export const updateExerciseMutation = gql`
	mutation updateExercise(
		$category: String
		$date: String
		$description: String
		$duration: String
		$id: String
		$username: String
	) {
		updateExercise(
			category: $category
			date: $date
			description: $description
			duration: $duration
			id: $id
			username: $username
		) {
			id
			description
		}
	}
`;

export const createExerciseMutation = gql`
	mutation createExercise(
		$category: String
		$date: String
		$description: String
		$duration: String
		$id: String
		$username: String
	) {
		credateExercise(
			category: $category
			date: $date
			description: $description
			duration: $duration
			id: $id
			username: $username
		) {
			description
			id
		}
	}
`;
