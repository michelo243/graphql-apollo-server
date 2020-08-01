//for fixed data in case we don't have a mongodb server yet
module.exports.tasks =[
    {id:"1",name:"Work", completed:false, userId:"3"},
    {id:"2",name:"Eat", completed:true, userId:"1"},
    {id:"3",name:"Shopping", completed:false, userId:"4"},
    {id:"4",name:"Gym", completed:true, userId:"2"}

   // {id:"1",name:"Work", completed:false, userId:"3"},
   //--> to avoid error
   //{id:"1",name:"Work", completed:false, user: {name: "", email: ""} } but it's not effiscient
];

module.exports.users =[
    {id:"1",name:"Michelo", email:"misam@gmail.com"},
    {id:"2",name:"candide", email:"sifa@gmail.com"},
    {id:"3",name:"Donel", email:"donel@gmail.com"},
    {id:"4",name:"Kayla", email:"kayla7@gmail.com"},
    {id:"5",name:"Maya", email:"ohmymaya@gmail.com"},
];