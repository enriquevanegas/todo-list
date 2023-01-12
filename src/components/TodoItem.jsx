import React from 'react'

export function TodoItem({ todo, toggleTodo }) {

    //variables
    const { id, task, completed } = todo;

    //Métodos
    const handleTaskCompleted = () => {
        toggleTodo(id);
    }

    return (
        <li id={id}>
            <input type="checkbox" checked={completed} onChange={handleTaskCompleted} />
            {task}
        </li>
    )
}
