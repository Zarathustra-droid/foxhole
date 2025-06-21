import React, { useEffect, useState } from 'react';
import { getDataFromCacheOrAPI } from '../utils/cache';

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = "tasks";
    getDataFromCacheOrAPI('/api/tasks', cacheKey)
        .then(fetchedData => {
          if (fetchedData) {
            setTasks(fetchedData);
          } else {
            setError('Failed to load data.');
          }
    })
  }, []);

  if (!tasks) return <div>Loading tasks...</div>;

  return (
    <div id="tasks-container">
      <h3>Tasks</h3>
      {tasks.map((task, index) => (
        <p key={index}>{task.text}</p>
      ))}
    </div>
  );
};

export default Tasks;

