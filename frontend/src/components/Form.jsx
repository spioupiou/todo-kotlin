import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (event) => {
    axios.post("/api/v1/todos", {
      title,
      deadline
    })
  // event.preventDefault();
  // Clear input field after submit
  };

  return (
    <div className="container py-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            className="form-control mb-2 mr-sm-2"
            placeholder="Task"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="deadline">Deadline</label>
          <input onChange={(e) => setDeadline(e.target.value)}
            type="date"
            name="deadline"
            className="form-control mb-2 mr-sm-2"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Add</button>
      </form>
    </div>
  )
}