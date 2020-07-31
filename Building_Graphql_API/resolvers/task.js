const {users, tasks} = require('../constants');
// for unique id
const uuid = require('uuid');

module.exports = {
    Query : {
        tasks:() => {
            return tasks; // refere to the tasks constante from folder constants
        },
        // We will simplify the line below
        // task:(_,{id}) => tasks.find(task => task.id === id)
        task:(_,{id}) => {
            console.log(typeof id);
            return tasks.find(task => task.id === id)
        }
    },
    Mutation: {
        createTask: (_,{ input }) =>{
            const task ={...input, id:uuid.v4()}
            tasks.push(task);
            return task;
        }
    },
    Task:{
        user:({userId}) => {
            return users.find(user => user.id === userId) //Field Level Resolver
        }
    }
}