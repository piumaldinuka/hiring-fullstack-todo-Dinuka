const mongoose = require( 'mongoose');


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
     createdAt: {
        type: Date,
    },
    updateAt: {
        type: Date,
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;