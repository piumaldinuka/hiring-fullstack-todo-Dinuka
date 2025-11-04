import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import message from "antd/es/message";

const TaskList = ({fetchTasks, onDone,updateTask,taskDeletes }) => {
  const [tasks, setTasks] = useState([]);
 
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTasks();
        setTasks(
          data
            .filter((task) => task.done === false)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        );
      } catch (error) {
        message.error("Error fetching tasks!");
        console.error(error);
      } 
    };

    fetchData();
  }, [fetchTasks]);

  const handleSubmit = async (e) => {
    console.log(e,'e');
    await onDone(e);
     window.location.reload();
  };

  const handleUpdate = async (id, title, description) => {
    console.log(id, title, description);
   const UpdatedTasks = { title, description };
   await updateTask(id,UpdatedTasks);
    window.location.reload();
  };

  const handleDelete = async (id) => { 
    console.log(id,'e');
    await taskDeletes(id);
     window.location.reload();
    }

  return (
    <div className="grid gap-4 w-full">
      {tasks?.map((task, index) => (
        <div
          key={task.id}
          className="task-appear"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <TaskCard
            task={task}
            handleUpdate={handleUpdate}
            onMarkDone={handleSubmit}  
            handleDelete={handleDelete}         
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
