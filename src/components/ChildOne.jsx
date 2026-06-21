import React from 'react'
import GrandChildOne from './GrandChildOne'
import './GrandChild.css'

const ChildOne = ({ title }) => {
  return (
    <div>
        ChildOne | {title}
        
        <span className='red'>
            <GrandChildOne data={title} />
        </span>

        <hr />
    </div>
  )
}

export default ChildOne