import React from 'react';
import { useTasks } from './hooks/useTasks';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskFilters } from './components/TaskFilters';
import { TaskList } from './components/TaskList';

function App() {
  const {
    tasks,
    stats,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    searchTerm,
    setSearchTerm,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    clearCompleted,
  } = useTasks();

  const hasCompletedTasks = stats.completed > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Header stats={stats} />
      
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <TaskForm onAddTask={addTask} />
        
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onClearCompleted={clearCompleted}
          hasCompletedTasks={hasCompletedTasks}
        />
        
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </div>
    </div>
  );
}

export default App;