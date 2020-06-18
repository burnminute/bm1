const Exercise = require("./model");

/**
 * Query resolver "exercises" must return values in response to
 * the query "exercises" in GraphQL schema.
 */
const resolvers = {
	Query: {
		exerciseList: () => Exercise.find({}),
		exerciseDetails: (parent, args, context, info) =>
			Exercise.findById(args.id),
	},

	/**
	 * Mutation resolver addExercise creates a new document in MongoDB
	 * in response to the "addExercise" mutation in GraphQL schema.
	 * The mutation resolvers must return the created object.
	 */
	Mutation: {
		addExercise: (parent, exercise) => {
			const { username, description, duration, category, date } = exercise;

			// addExercise: (parent, { username, description, duration, date }) => {
			// Create a new record in the database
			const newExercise = new Exercise({
				username: username,
				description: description,
				duration: duration,
				category: category,
				date: date,
			});
			// Save the record and return it
			return newExercise.save();
		},
		updateExercise: async (parent, exercise) => {
			console.log(`\nresolver values: ${JSON.stringify(exercise)}`);

			const { id, username, description, duration, category, date } = exercise;

			try {
				const exerciseToUpdate = await Exercise.findById(id);

				console.log(`exerciseToUpdate: ${JSON.stringify(exerciseToUpdate)}`);

				exerciseToUpdate.username = username;
				exerciseToUpdate.description = description;
				exerciseToUpdate.duration = duration;
				exerciseToUpdate.category = category;
				exerciseToUpdate.date = date;
				// Save the record and return it
				return exerciseToUpdate.save();
			} catch (error) {
				throw new Error(`Mongo - no record found for id: ${id}: \n\t${error}`);
			}
		},
	},
};

module.exports = resolvers;
