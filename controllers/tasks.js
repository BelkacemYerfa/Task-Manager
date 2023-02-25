const Task = require('../models/TaskSchema.js');

const getAllTasks = async(req , res)=>{
  try{
   const tasks = await Task.find({});
   res.status(200).json({tasks})
  }catch(error){
    res.status(500).json({msg : error})
  }
}

const PostTask = async (req , res)=>{
 //req.body is the data that we send from the client
 try {
  const task = await Task.create(req.body);
  res.status(201).json({task})
 } catch (error) {
  console.log(error);
  res.status(500).json({msg : error});
 }
}

const getSingleTask = async (req , res)=>{
 try {
  const SingleTask = await Task.findOne({_id : req.params.id});
  if(!SingleTask){
   return res.status(404).json({msg : 'No task found with this specific id'})
  }
  res.status(200).json({SingleTask});
 } catch (error) {
  res.status(500).json({msg : error});
 }
}

const UpdateTask = async (req , res)=>{
 try {
  const {id : taskID} = req.params;
  const newData = req.body;
  const UpdatedTask = await Task.findByIdAndUpdate({_id : taskID} , newData , {
   new : true ,
   runValidators : true
  });
  if(!UpdatedTask){
   return res.status(404).json({msg : 'No task found with this specific id'})
  }
  res.status(200).json({UpdatedTask});
 } catch (error) {
  res.status(500).json({msg : error});
 }
}

const DeleteTask = async (req , res)=>{
 try {
  const DeleteTask = await Task.findOneAndDelete({_id : req.params.id});
  res.status(200).json({DeleteTask});
  if(!DeleteTask){
   return res.status(404).json({msg : 'No task found with this specific id'})
  }
 } catch (error) {
  res.status(500).json({mgs : error});
 }
}


module.exports = {
 getAllTasks , 
 PostTask,
 getSingleTask,
 UpdateTask,
 DeleteTask
}