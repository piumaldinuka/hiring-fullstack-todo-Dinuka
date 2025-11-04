import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

const API_URL = "http://localhost:3000/api/todos";

export const useTasks = () => {
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    return res.data;
  };

  const addTask = async (task) => {
    await axios.post(API_URL, task)
    .then(async() => {
      message.success("Task added successfully!");
      await fetchTasks();
    })
    .catch((error) => {
      message.error("Error adding task!");
      console.log(error);
    });
  };

const updateTask = async (taskId,task) => {
  console.log(taskId,task);
    await axios
      .put(`${API_URL}/${taskId}`,task)
      .then(async() => {
        message.success("Task updated successfully!!");
       await  fetchTasks();
      })
      .catch((error) => {
        message.error("Error updating task!");
        console.log(error);
      });
  };


  const markTaskAsDone = async (taskId: string) => {
    await axios
      .patch(`${API_URL}/${taskId}/done`)
      .then(async() => {
        message.success("Task marked as done!");
        await  fetchTasks();
      })
      .catch((error) => {
        message.error("Error marking task as done!");
        console.log(error);
      });
  };


const  taskDelete = async (taskId: string) => {
    await axios
      .delete(`${API_URL}/${taskId}`)
      .then(async() => {
        message.success("Task deleted successfully!");
        await  fetchTasks();
      })
       .catch((error) => {
        message.error("Error Task Delete!");
        console.log(error);
      });
    }

  return {
    addTask,
    fetchTasks,
    updateTask,
    markTaskAsDone,
    taskDelete
 
  };
};
