import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const callRestApi = async () => {
    const response = await fetch("/api/v1/todos");
    const jsonResponse = await response.json();
    return jsonResponse
};

const RenderResult = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    callRestApi().then(
      result => setTodos(result));
  },[]);

  return (
    <div>
      {console.log(todos)}
      {todos.length > 0 && (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

ReactDOM.render(
    <RenderResult/>,
    document.querySelector('#root')
);
