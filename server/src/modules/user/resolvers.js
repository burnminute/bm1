const User = require('./model');

/**
 * Query resolver "users" must return values in response to
 * the query "users" in GraphQL schema.
 */
const resolvers = {
	Query: {
		// Query which returns users list
		users: () => User.find({}),
	},

	/**
	 * Mutation resolver addUser creates a new document in MongoDB
	 * in response to the "addUser" mutation in GraphQL schema.
	 * The mutation resolvers must return the created object.
	 */
	Mutation: {
		addUser: (parent, user) => {
			// Create a new record in the database
			const newUser = new User({
				username: user.username
			});
			// Save the record and return it
			return newUser.save();
		}
	}
};

module.exports = resolvers;
