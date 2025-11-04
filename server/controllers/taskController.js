const Task = require('../models/task');

const getTasks = async () => {
  const rows = await Task.find().sort({ _id: -1 }); // Fetch all tasks sorted by _id in descending order  
  return rows;
};

const createTask = async ({ title, description }) => {
  try {
   console.log(title, description);
     
  const result = await Task({ title, description, createdAt: new Date() });
  console.log(result);
  await result.save();
  return result._id;    
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

const updateTask = async ( id,{ title, description }) => {
  console.log(id, title, description );
  await Task.findByIdAndUpdate(id, { title: title, description: description,updateAt:new Date() }, { new: true });  
}

const markTaskDone = async (id) => {
 await Task.findByIdAndUpdate(id, { done: true });  
};

const deleteTask = async (id) => {
 await Task.findByIdAndDelete(id);  
};
module.exports = { getTasks, createTask , updateTask,markTaskDone ,deleteTask };
