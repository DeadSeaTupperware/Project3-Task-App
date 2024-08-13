import React, { useState, useEffect } from 'react';

const TaskRecap = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
  
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
