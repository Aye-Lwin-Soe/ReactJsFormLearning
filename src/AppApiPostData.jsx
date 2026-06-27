import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [posts, setPosts] = useState([]);
  const fetchData = async() => {
    const data = await fetch("https://fakestoreapi.com/products")
                  .then(response => response.json())
                  .catch(error => console.log(error.message))

    if (data) setPosts(data);
    
  }
 
  useEffect(() => {
     fetchData();
  }, [])
 
  return (
    <div>
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