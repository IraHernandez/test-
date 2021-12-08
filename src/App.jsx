import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [user, setuser] = useState([])
   useEffect(()=>{
  const api  = fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => setuser(data));
   },[])
  
  return (
    <div className="app">
      <ul>
        {user.map((title)=>(
          <li>
            <span>
            {title.title}
            </span>
            <button>
              <span> 
                completed: 
              </span>
              {title.completed ? "true" : "false"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
