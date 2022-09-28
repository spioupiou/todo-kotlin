import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (event) => {
    axios.post('/api/v1/todos/register', {
      title,
      deadline
    })
  // event.preventDefault();
  // Clear input field after submit
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
        />
        <input onChange={(e) => setDeadline(e.target.value)}
          type="date"
          name="deadline"
        />

        <button>Add</button>
      </form>
    </div>
  )
}