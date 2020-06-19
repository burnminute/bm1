import gql from "graphql-tag";

export const getUserListQuery = gql`
	query getUserList {
		exerciseList {
			email
			fullName
			id
			username
		}
	}
`;

export const getUserDetailsQuery = gql`
	query getUserDetails($id: String!) {
		exerciseDetails(id: $id) {
			email
			fullName
			id
			username
		}
	}
`;

export const updateUserMutation = gql`
	mutation updateUser(
		$email: String
		$fullName: String
		$id: String
		$username: String
	) {
		updateUser(
			email: $email
			fullname: $fullname
			id: $id
			username: $username
		) {
			id
			fullname
		}
	}
`;

export const createUserMutation = gql`
	mutation createUser(
		$email: String
		$fullname: String
		$id: String
		$username: String
	) {
		credateUser(
			email: $email
			fullname: $fullname
			id: $id
			username: $username
		) {
			fullname
			id
		}
	}
`;
