//first create a server

const express = require('express');
const app = express();
const routes = require('./routes/task.js');
const connectDb = require('./db/connect.js');
require('dotenv').config();


app.use(express.static('./public')); //to serve static files
app.use(express.json());

app.get('/' , (req , res)=>{
 console.log('Hello Express')
 res.end('Task')
})

app.use('/api/v1/tasks' , routes)

const port = 3000

const start = async ()=>{
 try{
  await connectDb(process.env.MONGO_URI)
  app.listen(port , ()=>{
   console.log(`Server is up on port ${port}`)
  })
 } catch(error) {
  console.log(error);
 }
}

start(); 
 