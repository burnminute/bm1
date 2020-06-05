const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Exercise {
    id: ID
    username: String
    description: String
    duration: Int
    date: String
  }

  input CreateExerciseInput {
    username: String! 
    description: String
    duration: Int 
    date: String
  }

  input UpdateExerciseInput {
    id: ID! 
    username: String! 
    description: String
    duration: Int 
    date: String
  }

  type Query {
    exerciseList: [Exercise]
    exerciseDetails(id: String): Exercise
  }

  type Mutation {
    addExercise(exercise: CreateExerciseInput): Exercise
    updateExercise(exercise: UpdateExerciseInput): Exercise
    deleteExercise(id: ID): Exercise
  }
`;

module.exports = typeDefs;
