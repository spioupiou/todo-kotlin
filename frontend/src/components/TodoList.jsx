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

  const BadgeType = (deadline) => {
    const formattedDeadline = new Date(deadline)
    const today = new Date();
    const minus3 = formattedDeadline;
    minus3.setDate(minus3.getDate() - 3)
    minus3.setMonth(minus3.getMonth());
    minus3.setFullYear(minus3.getFullYear());
    if (minus3 < today && formattedDeadline >= today) {
      return <span className="badge bg-warning">{formattedDeadline}</span>
    }

//     {if todo.deadline.minusDays(3) < today && todo.deadline >= today }
  }

  return (
    <div className="list-group">
      <div className="list-group-item">
        {todos.map(todo => 
          <div key={todo.id} className="d-flex w-100 justify-content-between">
            <input className="form-check-input me-1" type="checkbox" defaultChecked={todo.status} />
            {todo.title}
            <BadgeType ={todo.deadline}/>

          </div>
        )}
      </div>
    </div>
  )
};