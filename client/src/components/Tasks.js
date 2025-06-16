import React, { useEffect, useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data.data))
      .catch(console.error);
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

