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
        # We will repllace those two line by the scalar Type we create
        # createdAt: String!
        # updatedAt: String!
        createdAt: Date!
        updatedAt: Date!

    }
    # Notion d'heritage --> ajoute le champs address dans la classe user
    extend type User {
        address : String!
    }

`;