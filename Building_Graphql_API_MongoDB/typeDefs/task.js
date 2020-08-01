const {  gql } = require ('apollo-server-express');

module.exports = gql`
    extend type Query {
        tasks:[Task!] 
        # querying task by id
        task(id: ID!) : Task
    }

    # create mutatioin
    input createTaskInput {
        name: String!
        completed: Boolean!
        userId: ID!
    }

    extend type Mutation {
        createTask(input: createTaskInput!): Task
    }

    type Task {
        id: ID!
        name: String!
        completed: Boolean!
        user: User!
    }
`;