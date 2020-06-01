const mongoose = require("mongoose");

const uri = process.env.ATLAS_URI;
console.log(`\n\tMongoDB URI: ${uri}`);
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});
const { connection } = mongoose;

// Connecton / Error listeners
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});
connection.on('error', error => console.error(error));

module.exports = mongoose;
