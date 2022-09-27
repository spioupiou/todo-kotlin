import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const callRestApi = async () => {
    const response = await fetch("/api/v1/todos");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return React.createElement('h1', null, JSON.stringify(jsonResponse));
};

const RenderResult = () => {
  const [apiResponse, setApiResponse] = useState("Loading...");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div>
          <h1>Todos</h1>
          <p>{apiResponse}</p>
      </div>
  );
};

ReactDOM.render(
    <RenderResult/>,
    document.querySelector('#root')
);
