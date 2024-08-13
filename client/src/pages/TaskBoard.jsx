import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, date: taskDate, completed: false }]);
      setTaskText('');
      setTaskDate(new Date());
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredTasks = tasks.filter(
    (task) => task.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="task-board">
      <h1>Task Board</h1>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
        />
        <Calendar
          onChange={setTaskDate}
          value={taskDate}
          className="task-calendar"
        />
        <button type="submit" className="task-add-button">Add Task</button>
      </form>
      <h2>Tasks for {selectedDate.toDateString()}</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="task-calendar"
        tileClassName={({ date }) => {
          // Highlight tiles that match task dates
          return tasks.some(task => task.date.toDateString() === date.toDateString())
            ? 'highlight'
            : null;
        }}
      />
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => handleToggleComplete(index)}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)} className="task-delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskBoard;
