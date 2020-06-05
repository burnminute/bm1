const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema(
	{
		// id: { type: String, required: true }, // id auto generated by mongo
		username: { type: String, required: true },
		description: { type: String, required: true },
		duration: { type: Number, required: true },
		date: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
