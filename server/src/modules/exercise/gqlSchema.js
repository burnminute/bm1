const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Exercise {
    id: String
    username: String
    description: String
    duration: String
    category: String
    date: String
  }

  input CreateExerciseInput {
    username: String! 
    description: String
    duration: String 
    category: String 
    date: String
  }

  input UpdateExerciseInput {
    id: String! 
    username: String! 
    description: String
    duration: String 
    category: String 
    date: String
  }

  type Query {
    exerciseList: [Exercise]
    exerciseDetails(id: String!): Exercise
  }

  type Mutation {
    addExercise(exercise: CreateExerciseInput): Exercise
    updateExercise(exercise: UpdateExerciseInput): Exercise
    deleteExercise(id: String): Exercise
  }
`;

module.exports = typeDefs;
