import React from 'react';
import './TodoItem.css';

export function TodoItem({ todo, toggleTodo }) {

    //variables
    const { id, task, completed } = todo;

    //Métodos
    const handleTaskCompleted = () => {
        toggleTodo(id);
    }

    return (
        <li className='todo-list-item' id={id}>
            <input type="checkbox" checked={completed} onChange={handleTaskCompleted} />
            {task}
        </li>
    )
}
