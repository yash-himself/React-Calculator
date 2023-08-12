
import './App.css';
import React, { useState } from "react";



function App() {

  let [num1, setNum1] = useState('');
  let [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('')

  const add = (e) => {

    if (num1 === '' || num2 === '') {
      setMessage('Enter valid value!')
      setResult('Error!')
      setSuccess('')
    } else {
      num1 = parseFloat(num1)
      num2 = parseFloat(num2)
      let res = num1 + num2;
      setSuccess('Success')
      setMessage('')
      setResult(res.toFixed(2));
    }
  }
  const sub = (e) => {

    if (num1 === '' || num2 === '') {
      setMessage('Enter valid value!')
      setResult('Error!')
      setSuccess('')
    } else {
      num1 = parseFloat(num1)
      num2 = parseFloat(num2)
      let res = num1 - num2;
      setSuccess('Success')
      setMessage('')
      setResult(res.toFixed(2));
    }
  }
  const mul = (e) => {

    if (num1 === '' || num2 === '') {
      setMessage('Enter valid value!')
      setResult('Error!')
      setSuccess('')
    } else {
      num1 = parseFloat(num1)
      num2 = parseFloat(num2)
      let res = num1 * num2;
      setSuccess('Success')
      setMessage('')
      setResult(res.toFixed(2));
    }
  }
  const dev = (e) => {

    if (num1 === '' || num2 === '') {
      setMessage('Enter valid value!')
      setResult('Error!')
      setSuccess('')
    } else {
      num1 = parseFloat(num1)
      num2 = parseFloat(num2)
      let res = num1 / num2;
      setSuccess('Success')
      setMessage('')
      setResult(res.toFixed(2));
    }
  }



  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <div>
        <input className='inp'
          placeholder='Enter Num1'
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <input className='inp'
          placeholder='Enter Num1'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          type="text"
        />
      </div>
      <div className="btnBox">
        <button onClick={add} className="btn">+</button>
        <button onClick={sub} className="btn">-</button>
        <button onClick={mul} className="btn">x</button>
        <button onClick={dev} className="btn">/</button>

      </div>
      <p className='msg' style={{ color: 'rgb(48, 221, 100)' }}>{success}</p>
      <p className='msg' style={{ color: 'tomato' }}>{message}</p>
      <p style={{ color: 'blue', fontWeight: 600 }}>Result: {result}</p>
    </div>

  );
}

export default App;
