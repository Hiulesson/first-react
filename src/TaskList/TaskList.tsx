import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';


interface TaskListProps {
  tasks: { id: number; name: string; completed: boolean }[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  //Logica do botao Adicionar
  const [taskList, setTaskList] = useState(tasks);
  const [newTask, setNewTask] = useState<string>('');
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = { id: Date.now(), name: newTask, completed: false };
      setTaskList([...taskList, newTaskObject]);
      setNewTask('');
    }
  };

  //Logica de marcar tarefas
  const handleToggleTask = (taskId: number) => {
    const updatedTasks = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  //Logica do botão de excluir 
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {taskList.map(task => (
          <div key={task.id}>
            <TaskItem
              task={task.name}
              completed={task.completed}
              onToggle={() => handleToggleTask(task.id)}
            />
            <button onClick={() => handleDeleteTask(task.id)}>Excluir</button>
          </div>
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