const { gql } = require("apollo-server-express");

const typeDefs = gql`
// Note that the _id is created automatically by mongoose
  type Exercise {
    _id: ID,
    username: String,
    description: String,
    duration: Number,
    date: Date
  },
  type Query {
    exercises: [Exercise]
  },
  type Mutation {
    addExercise(username: String!, description: String, duration: Number, date: Date): Exercise,
  }
`;

module.exports = typeDefs;
