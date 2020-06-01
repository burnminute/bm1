// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// console.log(`\n\tMongoDB URI: ${uri}`);
// mongoose.connect(uri, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true
// });
// const { connection } = mongoose;
// connection.once("open", () => {
// 	console.log("MongoDB database connection established successfully");
// });

// const exercisesRouter = require("./routes/exercises");
// const usersRouter = require("./routes/users");

// app.use("/exercises", exercisesRouter);
// app.use("/users", usersRouter);

// app.listen(port, () => {
// 	console.log(`Server is running on port: ${port}`);
// });


// #1 Import Express and Apollo Server
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// #2 Import mongoose
const mongoose = require("./config/database");

// #3 Import GraphQL type definitions
const typeDefs = require("./modules/post/graphqlSchema");

// #4 Import GraphQL resolvers
const resolvers = require("./modules/post/resolvers");

// #5 Initialize an Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// #6 Initialize an Express application
const app = express();

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });

// #8 Set the port that the Express application will listen to
app.listen({ port: 3000 }, () => {
	console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});
