import React from "react";
import { TodoList } from "./TodoList";

export function Card({ inputAddTask, handlerAddTask, handlerClearCompleted, todos, toggleTodo }) {

    return (
        <>
            <h1>ToDo List</h1>

            <div id="new-task">
                <input ref={inputAddTask} type="text" placeholder="Nueva tarea" />
                <button onClick={handlerAddTask}> Add </button>
                <button onClick={handlerClearCompleted}> Clear </button>
            </div>

            <TodoList todos={todos} toggleTodo={toggleTodo} />

            <label>Te queda {todos.filter(task => !task.completed).length} tareas por completar.</label>
        </>
    );
}