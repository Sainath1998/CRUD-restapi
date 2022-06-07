const express = require('express')
const mongoose = require('mongoose')
const taskSchema = require('../model/taskSchema')
const router = express.Router()
const {getAllTasks,createTasks,updateTask,getTask,deleteTask} = require('../controller/task')

router.route('/').get(getAllTasks)

router.route('/create').post(createTasks)

router.route('/update:id').patch(updateTask)

router.route('/:id').get(getTask)

router.route('/:id').delete(deleteTask)

module.exports = router