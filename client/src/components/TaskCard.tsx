import { useState } from "react";
import { Card, Button, Checkbox, Input } from "antd";
import { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onMarkDone: (id: string) => void;
  handleUpdate: (id: string,title: string, description: string) => void;
  handleDelete: (id: string) => void;
}

const TaskCard = ({ task, handleUpdate,handleDelete, onMarkDone }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

   return (
    <Card
      size="small"
      className="task-card w-full animate-fade-in"
      style={{ backgroundColor: "#f5f5f5" }}
      title={isEditing ? (
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        task.title
      )}
    >
      <div className="w-full max-w-lg mx-auto flex items-start gap-4">
        <div className="text-sm text-gray-600 whitespace-pre-wrap flex-1">
          {isEditing ? (
            <Input.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          ) : (
            (task.description || (
              <span className="text-muted-foreground italic">No description</span>
            ))
          )}
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <Button
              className="hover:bg-blue-600 transition-colors"
              type="primary"
              onClick={() => { handleUpdate(task._id, title, description);
                    setIsEditing(false);
                    }}
            >
              Save
            </Button>
          ) : (
            <Button
              className="hover:bg-blue-600 transition-colors"
              type="primary"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
          <Button
            className="bg-todo-blue hover:bg-blue-600 transition-colors"
            type="primary"
            onClick={() => onMarkDone(task._id)}
          >
            Done
          </Button>
            <Button
            className="bg-todo-blue hover:bg-blue-600 transition-colors"
            type="primary"
            onClick={() => handleDelete(task._id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
