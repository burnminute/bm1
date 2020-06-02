require("dotenv").config();
require("./config/database");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./modules/exercise/gqlSchema");
const resolvers = require("./modules/exercise/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
const port = process.env.PORT || 5000;

server.applyMiddleware({ app });

app.listen({ port: 5000 }, () => {
	console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});
