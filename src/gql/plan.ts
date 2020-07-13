import gql from "graphql-tag";

export const getPlanListQuery = gql`
	query getPlanList {
		planList {
			active
			category
			dateEnd
			dateStart
			description
			exercises
			frequency
			id
			title
			privacy
			userId
		}
	}
`;

export const getPlanDetailsQuery = gql`
	query getPlanDetails($id: String!) {
		planDetails(id: $id) {
			active
			category
			dateEnd
			dateStart
			description
			exercises
			frequency
			id
			title
			privacy
			userId
		}
	}
`;

export const updatePlanMutation = gql`
	mutation updatePlan(
		$active: Boolean
		$category: String
		$dateEnd: String
		$dateStart: String
		$description: String
		$exercises: Exercise[]
		$frequency: String
		$id: String
		$title: String
		$privacy: String
		$userId: String
	) {
		updatePlan(
			active: $active
			category: $category
			dateEnd: $dateEnd
			dateStart: $dateStart
			description: $description
			exercises: $exercises
			frequency: $frequency
			id: $id
			title: $title
			privacy: $privacy
			userId: $userId
		) {
			id
			title
		}
	}
`;

export const createPlanMutation = gql`
	mutation createPlan(
		$active: Boolean
		$category: String
		$dateEnd: String
		$dateStart: String
		$description: String
		$exercises: Exercise[]
		$frequency: String
		$id: String
		$title: String
		$privacy: String
		$userId: String
	) {
		credatePlan(
			active: $active
			category: $category
			dateEnd: $dateEnd
			dateStart: $dateStart
			description: $description
			exercises: $exercises
			frequency: $frequency
			id: $id
			title: $title
			privacy: $privacy
			userId: $userId
		) {
			title
			id
		}
	}
`;
