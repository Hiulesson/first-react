import React from 'react';

// Definindo Interface
interface TaskItemProps {
    task : string;
    completed: boolean;
    onToggle: () => void;
}

// Componente TaskItem
const TaskItem: React.FC<TaskItemProps> = ( { task, completed, onToggle } ) => {
    return(
        <li style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={onToggle}>
        {task}
      </li>
    );
};

export default TaskItem;