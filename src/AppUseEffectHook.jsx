import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('This is Testing Message')
  const [description, setDescription] = useState('Old Desc....')
  const fetchData = async() => {
    const data = await fetch("https://fakestoreapi.com/products")
                  .then(response => response.json())
                  .catch(error => console.log(error.message))

    if (data) setPosts(data);
    
  }
 
  useEffect(() => {
    console.log("use effect hook running.....")
     fetchData();
  }, [message, description])
 
  return (
    <div>
        <p>{message}</p>
        <button onClick={()=>setMessage("Update Text")}>Set Message Button</button>
        <hr />
        <p>{description}</p>
        <button onClick={() => setDescription("Update Description")}>Set New Des Button</button>
        <h1>Api Posts Data</h1>
        <hr />
        <ul>
        {
          posts.map((post) => (
            <li key={post.id}>
              <div>
                {post.title} <small>{post.body}</small>
              </div>
            </li>
          ))
        }
        </ul>
    </div>
  )
}

export default App