const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Exercise {
		id: String
		username: String
		description: String
		duration: String
		category: String
		date: String
	}

	input CreateExerciseInput {
		username: String!
		description: String
		duration: String
		category: String
		date: String
	}

	input UpdateExerciseInput {
		id: String!
		username: String!
		description: String!
		duration: String
		category: String
		date: String
	}

	type Query {
		exerciseList: [Exercise]
		exerciseDetails(id: String!): Exercise
	}

	type Mutation {
		addExercise(
			username: String
			description: String
			duration: String
			category: String
			date: String
		): Exercise
		updateExercise(
			id: String
			username: String
			description: String
			duration: String
			category: String
			date: String
		): Exercise
		deleteExercise(id: String): Exercise
	}
`;

module.exports = typeDefs;
