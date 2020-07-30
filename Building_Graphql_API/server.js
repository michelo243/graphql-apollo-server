const express = require ('express');
const { ApolloServer, gql } = require ('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');
//adding to the constants folders
const { tasks, users } = require('./constants');

// set env variables

dotEnv.config();

const app = express();

//activate the cors to avoid muulti domaine errors
//cors
app.use(cors());

//body parser
app.use(express.json());

const typeDefs = gql`
    type Query {
        greetings : String!
        tasks:[Task!] 
    }

    type User {
        id: ID!
        name: String!
        email: String!
        tasks: [Task!]
    }

    type Task {
        id: ID!
        name: String!
        completed: Boolean!
        user: User!
    }

`;

const resolvers ={
    Query : {
        greetings: () => "Jambo",
        tasks:() => tasks // refere to the tasks constante from folder constants
    },
    Task:{
        user:({userId}) => users.find(user => user.id === userId) //Field Level Resolver
    }

};

//Apollo server
//inside typeDefs we have the schema, in the resoolvers you will define how you will get the data foor this particular schema
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

apolloServer.applyMiddleware({ app, path: '/graphql'});

const PORT = process.env.PORT || 3000;

//just for test the server
app.use('/',(req, res, next) =>{
    res.send({message : 'Hello Moon !'});
});

app.listen(PORT, ()=> {
    console.log(`Server listening on PORT : ${PORT}`);
    console.log(`Graphql Endpoint : ${apolloServer.graphqlPath}`);
});