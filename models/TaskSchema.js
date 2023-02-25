const mongoose  = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type : String ,
    required : [true , 'Please provide a name'],
    trim : true ,
    maxLength : [20 , 'Name cannot be more than 20 characters'],
    minLength : [5 , 'Name cannot be less than 5 characters']
  } ,
  completed : {
    type : Boolean ,
    default : false
  } ,
})

module.exports = mongoose.model('Task' , TaskSchema);