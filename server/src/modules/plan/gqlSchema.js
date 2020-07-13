const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Plan {
		active: Boolean
		category: String
		dateEnd: String
		dateStart: String
		description: String
		exercises: Exercise[]
		frequency: String
		id: String
		title: String
		privacy: String
		userId: String
	}

	input CreatePlanInput {
		active: Boolean
		category: String
		dateEnd: String
		dateStart: String
		description: String
		exercises: Exercise[]
		frequency: String
		title: String
		privacy: String
		userId: String
	}

	input UpdatePlanInput {
		active: Boolean
		category: String
		dateEnd: String
		dateStart: String
		description: String
		exercises: Exercise[]
		frequency: String
		id: String
		title: String
		privacy: String
		userId: String
	}

	type Query {
		planList: [Plan]
		planDetails(id: String!): Plan
	}

	type Mutation {
		addPlan(
			active: Boolean
			category: String
			dateEnd: String
			dateStart: String
			description: String
			exercises: Exercise[]
			frequency: String
			title: String
			privacy: String
		): Plan
		updatePlan(
			active: Boolean
			category: String
			dateEnd: String
			dateStart: String
			description: String
			exercises: Exercise[]
			frequency: String
			id: String
			title: String
			privacy: String
			userId: String
		): Plan
		deletePlan(id: String): Plan
	}
`;

module.exports = typeDefs;
