const Exercise = require('./model');

/**
 * Query resolver "exercises" must return values in response to
 * the query "exercises" in GraphQL schema.
 */
const resolvers = {
	Query: {
		// Query which returns exercises list
		exercises: () => Exercise.find({}),
	},

	/**
	 * Mutation resolver addExercise creates a new document in MongoDB
	 * in response to the "addExercise" mutation in GraphQL schema.
	 * The mutation resolvers must return the created object.
	 */
	Mutation: {
		addExercise: (parent, exercise) => {
			// Create a new record in the database
			const newExercise = new Exercise({
				username: exercise.username,
				description: exercise.description,
				duration: exercise.duration,
				date: exercise.date
			});
			// Save the record and return it
			return newExercise.save();
		}
	}
};

module.exports = resolvers;
