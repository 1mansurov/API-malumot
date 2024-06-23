import './App.css'
import { useState, useEffect } from 'react';
import axios  from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(data => setData(data))
    
    axios("https://jsonplaceholder.typicode.com/users")
    .then(response => setData(response.data))

   

  }, [])

   console.log(data);
  return (
    <div className='wrapper' style={{display:"grid" , gridTemplateColumns:"repeat(4, 1fr)"}}>
    {
      data.map(users =>{
         return <div key={users.id} >
          <p>{users.id}</p>
          <h3>{users.name}</h3>
          <p>{users.username}</p>
          <small>{users.email}</small>
          <p>{users.address.city}</p>
          <small>{users.phone}</small>
         </div>
      })
    }
    </div>
  )
}

export default App
