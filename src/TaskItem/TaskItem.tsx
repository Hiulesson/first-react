import React from 'react';

// Definindo Interface
interface TaskItemProps {
    task : string;
}

// Componente TaskItem
const TaskItem: React.FC<TaskItemProps> = ( {task} ) => {
    return(
        <li>{task}</li>
    );
};

export default TaskItem;