import React from "react";
import TaskItem from "../TaskItem/TaskItem";

// Definindo o tipo para as props
interface TaskListProps {
    tasks: string[];
}

// Componente TaskList
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {/* Mapeia as tarefas recebidas como props e renderiza cada uma delas usando o componente TaskItem */}
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;