import React from 'react'
import './App.css'
import ChildTwo from './components/ChildTwo'
import ChildThree from './components/ChildThree'
import ThemeContext from './context/ThemeContext'
import ChildOneContext from './components/ChildOneContext'

function App() {

  const theme = "dark";
  console.log(theme);

  return (
    <div>
      <h1>Context</h1>
      <hr />
      <ThemeContext.Provider value={theme}>
        
        <ChildOneContext title="this is child one testing message from Root Component" />
        <ChildTwo title="this is child two testing message from Root Component" />
        <ChildThree title="this is child three testing message from Root Component" />

      </ThemeContext.Provider>
    </div>
  )
}

export default App