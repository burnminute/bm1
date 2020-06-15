const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema(
	{
		username: { type: String, required: true },
		description: { type: String, required: true },
		category: { type: String, required: false },
		duration: { type: String, required: false },
		date: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
