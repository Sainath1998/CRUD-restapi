const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    Task:{
        type:String,
        required:true
    }
},
    {collection:'Tasks'}
)

const model = mongoose.model('taskSchema',taskSchema)

module.exports = model