import gql from "graphql-tag";

export const updateExerciseMutation = gql`
	mutation updateExercise(
		$id: String
		$username: String
		$description: String
		$duration: String
		$category: String
		$date: String
	) {
		updateExercise(
			id: $id
			username: $username
			description: $description
			duration: $duration
			category: $category
			date: $date
		) {
			id
			description
		}
	}
`;

export const createExerciseMutation = gql`
	mutation createExercise(
		$id: String
		$username: String
		$description: String
		$duration: String
		$category: String
		$date: String
	) {
		credateExercise(
			id: $id
			username: $username
			description: $description
			duration: $duration
			category: $category
			date: $date
		) {
			id
			description
		}
	}
`;
