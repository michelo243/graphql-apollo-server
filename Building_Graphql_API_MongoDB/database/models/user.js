const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // on va utiliser les [] car cella va renvoyer un array
    tasks:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Task'
        }
    ]
},{
    timestamps: true
});

module.exports =  mongoose.model('User', userSchema);