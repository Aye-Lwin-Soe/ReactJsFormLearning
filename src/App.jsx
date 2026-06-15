import './App.css';
import React, { useRef } from 'react'

function App() {

  const name = useRef('')
  const email = useRef('')
  const message = useRef('')

  const userDataReceiver = () => {
    const data = {
      userName: name.current.value,
      userEmail: email.current.value,
      userMessage: message.current.value
    }

    console.log(data);

    name.current.value = ''
    email.current.value = ''
    message.current.value = ''
  }

  const changeToRed = () => {
    name.current.style.border = "1px solid red"
    email.current.style.border = "1px solid red"
    message.current.style.border = "1px solid red"

    name.current.focus();
  }

  const changeToBlue = () => {
    name.current.style.border = "1px solid blue"
    email.current.style.border = "1px solid blue"
    message.current.style.border = "1px solid blue"
  }

  return (
    <div className='container'>
      <form>
        <div className="form-group">
          <input type="text" ref={name} className='user-name' placeholder='Enter your name...' />
        </div>
        <div className="form-group">
          <input type="text" ref={email} className='user-name' placeholder='Enter your email...' />
        </div>
        <div className="form-group">
          <textarea ref={message} className='user-message' cols="30" rows="10" placeholder='Enter your message...'></textarea>
        </div>
        <div className="form-group">
          <button type='button' className='contact-btn' onClick={() => userDataReceiver() }>Create</button>
        </div>
        <div className="form-group">
          <button className="contact-btn btn-danger" type='button' onClick={ () => changeToRed() }>Change RED</button>
          <button className="contact-btn btn-primary" type='button' onClick={ () => changeToBlue() }>Change BLUE</button>
        </div>
      </form>
    </div>
  );
}

export default App;
