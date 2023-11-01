import React, { useState } from 'react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tasks will display here",
    },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      const taskId = tasks.length + 1;
      setTasks([...tasks, { id: taskId, text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-management">
      <h2>Task and Activity Management</h2>

      {/* Task Creation */}
      <div className="task-creation">
        <h3>Create New Task</h3>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task List */}
      <div className="task-list">
        <h3>Task List</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManagement;
