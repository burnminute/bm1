const mongoose = require("mongoose");
const Exercise = require("../exercise/model");

const { Schema } = mongoose;

const planSchema = new Schema(
	{
		active: { type: Boolean, required: true },
		category: { type: String, required: true },
		dateEnd: { type: String, required: false },
		dateStart: { type: String, required: false },
		description: { type: String, required: false },
		exercises: { type: [Exercise], required: false },
		frequency: { type: String, required: true },
		title: { type: String, required: true },
		privacy: { type: String, required: true },
		userId: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
