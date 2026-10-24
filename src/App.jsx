import 'sass-reset';
import './Main.scss'
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AddTask from "./Components/Task/AddTask/AddTask.jsx";
import TaskList from "./Components/Task/TaskList/TaskList.jsx";
import { createTask, deleteTask, fetchTasks, updateTask } from "./api/tasks.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [actionError, setActionError] = useState(null);

  useEffect(() => {
    let active = true;

    fetchTasks()
      .then((loadedTasks) => {
        if (active) setTasks(loadedTasks);
      })
      .catch((loadError) => {
        if (active) setLoadError(loadError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const handleAddTask = async (title) => {
    try {
      const task = await createTask(title);
      setTasks((currentTasks) => [...currentTasks, task]);
      setActionError(null);
      return true;
    } catch (requestError) {
      setActionError(requestError.message);
      return false;
    }
  };

  const handleToggleTask = async (task) => {
    try {
      const updatedTask = await updateTask(task.id, { done: !task.done });
      setTasks((currentTasks) =>
        currentTasks.map((currentTask) =>
          currentTask.id === updatedTask.id ? updatedTask : currentTask
        )
      );
      setActionError(null);
    } catch (requestError) {
      setActionError(requestError.message);
    }
  };

  const handleRemoveTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.id !== taskId)
      );
      setActionError(null);
    } catch (requestError) {
      setActionError(requestError.message);
    }
  };

  return (
    <>
      <section id="center">
        <Header />
          <AddTask onAdd={handleAddTask} disabled={loading} />
          {loading && <p role="status">Loading tasks...</p>}
          {loadError && <p role="alert">{loadError}</p>}
          {actionError && <p role="alert">{actionError}</p>}
          {!loading && (!loadError || tasks.length > 0) && (
            <TaskList
              tasks={tasks}
              onToggle={handleToggleTask}
              onRemove={handleRemoveTask}
            />
          )}
          <Footer />
      </section>
    </>
  )
}

export default App
