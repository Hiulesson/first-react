import './App.css'

import TaskList from './TaskList/TaskList'

const App: React.FC = () => {
  const tasks = [
    { id: 1, name: 'Fazer compras', completed: false },
    { id: 2, name: 'Estudar React', completed: false },
    { id: 3, name: 'Ir ao médico', completed: false }
  ];

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
