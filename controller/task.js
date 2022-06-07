const mongoose = require('mongoose')
const task = require('../model/taskSchema')
const getAllTasks = async(req, res)=>{
    try{
        const data = await task.find()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message:error})
    }
    
}

const createTasks = async(req, res)=>{
    try{
        const taskFromBody = req.body.Task
        const newTask = await task.create({Task:taskFromBody})
        res.send('Adding successfull')
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

const getTask = async(req, res)=>{
    try{
        const index = req.params.id 
        const result = await task.findOne({_id:index})
        if(! result){
            res.status(404).json({message:"no task"})
        }
        res.status(201).json(result)
        
    }
    catch(error){
        res.status(500).json({message:error})
    }
    

}

const updateTask = async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const updated = await task.findOneAndUpdate({_id:id},data,{new:true,runValidators:true})
    res.status(201).json({message:"Upadted the given id"})
    
}

const deleteTask = async(req, res)=>{
    try{
        const id = req.params.id
        await task.deleteOne({_id:id})
        res.status(201).json({message:"Removed the element"})

    }catch(error){
        res.status(500).json({message:error})
    }
}


module.exports ={
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask,
}