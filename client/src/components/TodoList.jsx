import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function CreateTodoList () {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/todos")
      .then((response) => {
        setTodos(response.data);
      })
  },[]);

  return (
    <div>
      <ul>
        {todos.map(todo => 
          <li key={todo.id}>{todo.title} - {todo.deadline}</li>
        )}
      </ul>
    </div>
  )
};