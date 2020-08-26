const Plan = require("./model");

/**
 * Query resolver "plans" must return values in response to
 * the query "plans" in GraphQL schema.
 */
const resolvers = {
	Query: {
		planList: () => Plan.find({}),
		planDetails: (parent, args, context, info) => Plan.findById(args.id),
	},

	/**
	 * Mutation resolver addPlan creates a new document in MongoDB
	 * in response to the "addPlan" mutation in GraphQL schema.
	 * The mutation resolvers must return the created object.
	 */
	Mutation: {
		addPlan: (parent, plan) => {
			const {
				active,
				category,
				dateEnd,
				dateStart,
				description,
				exercises,
				frequency,
				id,
				title,
				privacy,
				userId,
			} = plan;

			// Create a new record in the database
			const newPlan = new Plan({
				active: active,
				category: category,
				dateEnd: dateEnd,
				dateStart: dateStart,
				description: description,
				exercises: exercises,
				frequency: frequency,
				title: title,
				privacy: privacy,
				userId: userId,
			});
			// Save the record and return it
			return newPlan.save();
		},
		updatePlan: async (parent, plan) => {
			// console.log(`\nresolver values: ${JSON.stringify(plan)}`);

			const {
				active,
				category,
				dateEnd,
				dateStart,
				description,
				exercises,
				frequency,
				id,
				title,
				privacy,
				userId,
			} = plan;

			try {
				const planToUpdate = await Plan.findById(id);

				console.log(`planToUpdate: ${JSON.stringify(planToUpdate)}`);

				planToUpdate.active = active;
				planToUpdate.category = category;
				planToUpdate.dateEnd = dateEnd;
				planToUpdate.dateStart = dateStart;
				planToUpdate.description = description;
				planToUpdate.exercises = exercises;
				planToUpdate.frequency = frequency;
				planToUpdate.title = title;
				planToUpdate.privacy = privacy;
				planToUpdate.userId = userId;
				// Save the record and return it
				return planToUpdate.save();
			} catch (error) {
				throw new Error(`Mongo - no record found for id: ${id}: \n\t${error}`);
			}
		},
	},
};

module.exports = resolvers;
