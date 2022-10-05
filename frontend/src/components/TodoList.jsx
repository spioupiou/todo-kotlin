import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Checkbox from './Checkbox.jsx'

export default function CreateTodoList () {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/todos")
      .then((response) => {
        setTodos(response.data);
      })
  },[]);

  const handleClick = (id) => {
    console.log(id)
    axios.patch(`http://localhost:8080/api/v1/todos/${id}`)
  };

  const BadgeType = (deadline) => {
    const formattedDeadline = new Date(deadline)
    const today = new Date();
    const minus3 = new Date(new Date().setDate(formattedDeadline.getDate() - 3));

    if (minus3 < today && formattedDeadline >= today) {
      return <span className="badge bg-warning">{deadline}</span>
    } else if (today > formattedDeadline) {
      return <span className="badge bg-danger">{deadline}</span>
    } else {
      return <span className="badge bg-info">{deadline}</span>
    }
  }

  return (
    <div className="list-group">
      <div className="list-group-item">
        {todos.map(todo =>
          <div key={todo.id} className="d-flex w-100 justify-content-between">
            <input className="form-check-input me-1" type="checkbox" defaultChecked={todo.status} onClick={() => handleClick(todo.id)}/>
            {todo.title}
            {BadgeType(todo.deadline)}
          </div>
        )}
      </div>
    </div>
  )
};