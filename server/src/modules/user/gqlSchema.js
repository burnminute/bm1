const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		id: String
		username: String
		email: String
		fullName: String
	}
	type Query {
		users: [User]
	}
	type Mutation {
		addUser(username: String!): User
	}
`;

module.exports = typeDefs;
