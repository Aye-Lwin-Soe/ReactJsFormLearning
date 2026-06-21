import React from 'react'
import GrandChildTwo from './GrandChildTwo'
import './GrandChild.css'

const ChildTwo = ({title}) => {
  return (
    <div>
        ChildTwo | {title}
        
        <span className='red'>
            <GrandChildTwo data={title} />
        </span>

        <hr />
    </div>
  )
}

export default ChildTwo