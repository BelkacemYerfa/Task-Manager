const express = require('express');
//separate the routes from the app.js
//all the routes functionality will be in the controllers folder
const { 
 getAllTasks , 
 PostTask,
 getSingleTask,
 UpdateTask,
 DeleteTask 
} = require('../controllers/tasks');

// Create a router

const router = new express.Router();


router.route('/').get(getAllTasks).post(PostTask);
router.route('/:id').get(getSingleTask).patch(UpdateTask).delete(DeleteTask);

module.exports = router;