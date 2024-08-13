import React, { useState, useEffect } from 'react';

const TaskRecap = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Fetch completed tasks from the API
    fetch('/api/tasks/completed')
      .then(response => response.json())
      .then(data => setCompletedTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="task-recap">
      <h2>Recently Completed</h2>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>
            <div className="task-name">{task.name}</div>
            <div className="task-date">{new Date(task.completedAt).toLocaleDateString()}</div>
            <div className="task-reward">Points Earned: {task.points}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskRecap;