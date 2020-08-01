const { gql } = require ('apollo-server-express');

module.exports = gql`
    extend type Query {
        users: [User!]
        user(id :ID!) : User
    }

    extend type Mutation {
        signup (input: signupIput) : User
    }

    input signupIput {
        name: String!
        email: String!
        password: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        tasks: [Task!]
    }
    # Notion d'heritage --> ajoute le champs address dans la classe user
    extend type User {
        address : String!
    }

`;