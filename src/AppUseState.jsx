import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [language, setLanguage] = useState('')
  const [term, setTerm] = useState(false)

  const programmingLanguages = ['Java', 'PHP', 'C#', 'C++', 'Python', 'ReactJS'];

  const submitEvent = () => {
    const data = {
      name: name,
      email: email,
      message: message,
      language: language,
      term: term
    }

    console.log(data);
  }

  
  return (
    <div className='container'>
      <form>
        <div className="form-group">
          <input type="text" className='user-name' placeholder='Enter your name...' value={name} onChange={ (e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className='user-email' placeholder='Enter your email...' value={email} onChange={ (e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <textarea className='user-message' cols="30" rows="10" placeholder='Enter your message...' value={message} onChange={ (e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <select className="user-option" value={language} onChange={ (e) => setLanguage(e.target.value)}>
            {
              programmingLanguages.map( (item, index) => <option key={index} value={item}>{item}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <input type='checkbox' className='user-checkbox' onChange={(e) => setTerm(!term)} value={term} /> I accept all terms
        </div>
        <div className="form-group">
          <button type='button' className='contact-btn' onClick={() => submitEvent()}>Create</button>
        </div>
      </form>
    </div>
  );
}

export default App;
