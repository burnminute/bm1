const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Exercise {
    _id: ID
    username: String
    description: String
    duration: Int
    date: String
  },
  type Query {
    exercises: [Exercise]
  },
  type Mutation {
    addExercise(username: String!, description: String, duration: Int, date: String): Exercise,
  }
`;

module.exports = typeDefs;
