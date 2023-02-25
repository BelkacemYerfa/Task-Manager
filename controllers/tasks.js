const Task = require('../models/TaskSchema.js');

const getAllTasks = (req , res)=>{
 res.send('hello')
}

const PostTask = async (req , res)=>{
 //req.body is the data that we send from the client
 const task = await Task.create(req.body);
 res.status(201).json({task})
}

const getSingleTask = (req , res)=>{
 res.send('SignleTask task')
}

const UpdateTask = (req , res)=>{
 res.send('Update task')
}

const DeleteTask = (req , res)=>{
 res.send('Delete task')
}


module.exports = {
 getAllTasks , 
 PostTask,
 getSingleTask,
 UpdateTask,
 DeleteTask
}