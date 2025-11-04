const express = require('express');
const taskController = require('../controllers/taskController');



const tasksRouter = express.Router();

tasksRouter.get('/todos', async (req, res) => {
  const tasks = await taskController.getTasks();
console.log(tasks,'tasks');
  res.json(tasks);
});

tasksRouter.post('/todos',  async (req, res) => {
    const { title, description } = req.body;
  console.log(title, description ,'body');
  const id = await taskController.createTask({ title, description });
  res.status(201).json({ id });
});

tasksRouter.put('/todos/:taskId', async (req, res) => {
  const { title, description } = req.body;
  const id =req.params.taskId;
    console.log(id,title, description ,'body');
  await taskController.updateTask(id,{title, description});
  res.status(200).json({ message: 'Task marked as completed' });
});

tasksRouter.patch('/todos/:id/done', async (req, res) => {
  await taskController.markTaskDone(req.params.id);
  res.status(200).json({ message: 'Task marked as completed' });
});


tasksRouter.delete('/todos/:id', async (req, res) => {
  await taskController.deleteTask(req.params.id);
  res.status(200).json({ message: 'Task deleted successfully' });
});

module.exports= tasksRouter;