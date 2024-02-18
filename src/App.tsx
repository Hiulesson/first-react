import './App.css'

import TaskList from './TaskList/TaskList'

const App: React.FC = () => {
  const tasks = ['Fazer compras', 'Estudar React', 'Ir ao médico'];

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
