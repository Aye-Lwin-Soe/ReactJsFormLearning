import React from 'react'
import './App.css'
import ChildOne from './components/ChildOne'
import ChildTwo from './components/ChildTwo'
import ChildThree from './components/ChildThree'

function App() {
  return (
    <div>
      <h1>Context</h1>
      <hr />
      <ChildOne title="this is child one testing message from Root Component" />
      <ChildTwo title="this is child two testing message from Root Component" />
      <ChildThree title="this is child three testing message from Root Component" />
    </div>
  )
}

export default App