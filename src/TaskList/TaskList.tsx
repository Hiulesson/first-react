import React, { useState } from 'react';
import TaskItem from "../TaskItem/TaskItem";

// Definindo o tipo para as props
interface TaskListProps {
    tasks: string[];
}

// Componente TaskList
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {

  const [newTask, setNewTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>(tasks);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTaskList([...taskList, newTask]); // Adiciona a nova tarefa à lista de tarefas
      setNewTask(''); // Limpa o campo de entrada de texto
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {/* Mapeia as tarefas recebidas como props e renderiza cada uma delas usando o componente TaskItem */}
        {taskList.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
      <div>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
    </div>
  );
};

export default TaskList;