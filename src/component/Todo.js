import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });


  return Todos.map((todo ,index)=>(
      <div
      className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}
      key={index}
      >
          <div className={todo.id} onClick={() =>completetodo(todo.id)}>
              {todo.text}
          </div>
          <div className="icons">
              </div>
      </div>
  ))




export default Todo;
