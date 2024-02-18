import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';


interface TaskListProps {
  tasks: { id: number; name: string; completed: boolean }[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
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

  const handleToggleTask = (taskId: number) => {
    const updatedTasks = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {taskList.map(task => (
          <TaskItem
            key={task.id}
            task={task.name}
            completed={task.completed}
            onToggle={() => handleToggleTask(task.id)}
          />
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