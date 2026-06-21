import React, { useContext } from 'react'
import "./GrandChild.css"
import GrandChildOneContext from './GrandChildOneContext'
import ThemeContext from '../context/ThemeContext'

const ChildOneContext = ({title}) => {
    const contextData = useContext(ThemeContext)
    console.log(contextData)
  return (
    <div className={ contextData == 'dark' ? 'bg-dark' : 'bg-white'}>
        ChildOne | {title}
        
        <span className='red'>
            <GrandChildOneContext data={title} />
        </span>

        <hr />
    </div>
  )
}

export default ChildOneContext