import React, { useState } from 'react';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h2>To-Do List</h2>
            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={handleChange}
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t} <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
