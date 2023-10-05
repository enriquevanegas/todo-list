import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

export function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {
        //Los itemes de una lista requieren un 'key' unico
        todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
      }
    </ul>
  )
}
