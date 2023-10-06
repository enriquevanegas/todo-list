import React from "react";
import { TodoList } from "../TodoList/TodoList";
import './Card.css'

export function Card({ inputAddTask, handlerAddTask, handlerClearCompleted, todos, toggleTodo }) {

    return (
        <>
            <h1 className="main-title">ToDo List</h1>

            <div className="container">

                <div className="input-group">
                    <input ref={inputAddTask} type="text" placeholder="New task" autoFocus />
                    <button id="add" onClick={handlerAddTask}> Add </button>
                    <button id="clear" onClick={handlerClearCompleted}> Clear </button>
                </div>

                <div className="list-container">
                    <TodoList todos={todos} toggleTodo={toggleTodo} />
                </div>

                {
                    todos.length > 0
                        ? <label className="info-label">You have {todos.filter(task => !task.completed).length} task to be completed.</label>
                        : <hr className="line" />
                }

            </div>
        </>
    );
}