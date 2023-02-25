const mongoose  = require('mongoose');

const TaskSchema = new mongoose.Schema({
  TaskName: String ,
  Completed : Boolean ,
})

module.exports = mongoose.model('Task' , TaskSchema);