import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoList.css'

export function TodoList({ todos, toggleTodo }) {
  return (
    //Los itemes de una lista requieren un 'key' unico
    todos.length != 0 ?
      <ul className="todo-list">{todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}</ul>
      : <p className="no-items">NO TASK</p>
  )
}
