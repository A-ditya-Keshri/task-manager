import { useState, useEffect } from 'react';
import api from './api';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await api.get('tasks/');
      // Sort: Incomplete first, then by ID desc (newest first usually)
      const sorted = response.data.sort((a, b) => {
        if (a.completed === b.completed) {
          return b.id - a.id;
        }
        return a.completed ? 1 : -1;
      });
      setTasks(sorted);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (title) => {
    try {
      const response = await api.post('tasks/', { title });
      setTasks(prev => [response.data, ...prev]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      // Optimistic update
      setTasks(prev => prev.map(t =>
        t.id === id ? { ...t, completed } : t
      ));

      // Background update
      await api.patch(`tasks/${id}/`, { completed });

      // Re-sort logic if needed (optional, doing it on fetch is safer or re-sort locally)
      // For now, simple optimistic toggle is fine.
    } catch (error) {
      console.error('Error updating task:', error);
      fetchTasks(); // Revert on error
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      // Optimistic update
      setTasks(prev => prev.filter(t => t.id !== id));
      await api.delete(`tasks/${id}/`);
    } catch (error) {
      console.error('Error deleting task:', error);
      fetchTasks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-3xl px-4 sm:px-6">
        <Header />
        <main>
          <TaskForm onAddTask={handleAddTask} />
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-500">Loading your tasks...</p>
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          )}
        </main>
        <footer className="mt-16 text-center text-gray-400 text-sm pb-8">
          <p>&copy; {new Date().getFullYear()} Task Manager App</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
