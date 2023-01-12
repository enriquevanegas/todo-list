import React, { useState, useRef, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuid } from 'uuid'; //Para generar ID's aleatorios

const KEY = 'todo-list';

export function App() {

    //Estados
    const [todos, setTodos] = useState([]);

    //Referencias
    const inputAddTask = useRef();

    //use Effect
    /* Recupera las tareas guardadas */
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos) setTodos(storedTodos);
    }, []);

    /* Guardando ToDo en Local Storage */
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    //Métodos
    const handlerAddTask = () => {

        //Se obtine el valor del nuevo item
        const task = inputAddTask.current.value;

        //Se verifica que no sea nulo el valor
        if (!task) return;

        //Se realiza una copia del array anterior y se agrega el nuevo item.
        setTodos((prevTodos) => [...prevTodos, { id: uuid(), task, completed: false }]);

        //Se borra el valor en el input
        inputAddTask.current.value = null;
    }

    const handlerClearCompleted = () => {
        const newTodos = todos.filter(task => !task.completed);
        setTodos(newTodos);
    }

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const task = newTodos.find(task => task.id === id);
        task.completed = !task.completed;
        setTodos(newTodos);
    }

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