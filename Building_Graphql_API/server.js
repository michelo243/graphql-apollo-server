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
        # querying task by id
        task(id: ID!) : Task
        # query User List & Get User by ID
        users: [User!]
        user(id :ID!) : User
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
        tasks:() => {
            return tasks; // refere to the tasks constante from folder constants
        },
        // We will simplify the line below
        // task:(_,{id}) => tasks.find(task => task.id === id)
        task:(_,{id}) => {
            console.log(typeof id);
            return tasks.find(task => task.id === id)
        },
        // Users list and get user by Id
        users: () => users,
        user:(_,{id}) =>{
            return users.find(user => user.id  === id)
        }
    },
    Task:{
        user:({userId}) => {
            return users.find(user => user.id === userId) //Field Level Resolver
        }
    },
    User:{
        tasks:({ id }) => tasks.filter(task => task.userId === id)
            // filter instead of find and will return a new array
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