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
			// addExercise: (parent, { username, description, duration, date }) => {
			// Create a new record in the database
			const newExercise = new Exercise({
				// exercise: {
				username: "yo",
				description: "sup?",
				duration: "123 hi",
				category: "hmm",
				date: "weird day",
				// }
				// username: exercise.username,
				// description: exercise.description,
				// duration: exercise.duration,
				// category: exercise.category,
				// date: exercise.date
			});
			// Save the record and return it
			return newExercise.save();
		},
		updateExercise: (parent, exercise) => {
			// Update an existing record in the database
			// const exerciseToUpdate = Exercise.findOne({ _id: exercise.id });

			console.log(`\nresolver values: ${JSON.stringify(exercise)}`);

			const exerciseToUpdate = new Exercise({
				// username: "yo",
				// description: "sup?",
				// duration: "123 hi bro",
				// category: "hmm",
				// date: "weird day"
				username: exercise.username,
				description: exercise.description,
				duration: exercise.duration,
				category: exercise.category,
				date: exercise.date,
			});
			// exerciseToUpdate.username = exercise.username;
			// exerciseToUpdate.description = exercise.description;
			// exerciseToUpdate.duration = exercise.duration;
			// exerciseToUpdate.category = exercise.category;
			// exerciseToUpdate.date = exercise.date;

			// Save the record and return it
			return exerciseToUpdate.save();
		},
	},
};

module.exports = resolvers;
