import React, { useState, useRef, useEffect } from "react";
import { Card } from './components/Card/Card'
import { v4 as uuid } from 'uuid'; //Para generar ID's aleatorios
import './App.css';

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
        if (storedTodos) setTodos(storedTodos);
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
        const todosNotCompleted = todos.filter(task => !task.completed);
        setTodos(todosNotCompleted);
    }

    const toggleTodo = (id) => {
        const currentTodoList = [...todos];
        const task = currentTodoList.find(task => task.id === id);
        task.completed = !task.completed;
        setTodos(currentTodoList);
    }

    return (
        <main>
            <Card
                inputAddTask={inputAddTask}
                handlerAddTask={handlerAddTask}
                handlerClearCompleted={handlerClearCompleted}
                todos={todos}
                toggleTodo={toggleTodo} />
        </main>
    );
}