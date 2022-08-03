import React from "react";
import {useState} from 'react';

function App() {
  let random = Math.floor(Math.random() * 10) + 1;
  const [userGuess, setUserGuess] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [userAllGuessValue, setUserAllGuessValue] = useState([])
  const [randomNumber, setRandomNumber] = useState(random)
  const [msg, setMsg] = useState('')
  const [disabled, setDisabled] = useState(false)
  

  const handleValueChange = (e) => {
    setUserGuess(e.target.value)
  }

  const submitHandler = () => {
    if (Number(randomNumber) === Number(userGuess)) {
      setMsg('Congratulations !!!')
      setDisabled(true)
    }else if(userCount === 4){
      setMsg('Game is Over !1!')
      setDisabled(true)
    }else if(Number(randomNumber) < Number(userGuess)){
      setMsg('Worng guess! It may be little Lower')
    }else if(Number(randomNumber) > Number(userGuess)){
      setMsg('Worng guess! It may be little Higher')
    }else if(Number(userGuess) > 10){
      setMsg('Worng Guess !!!')
    }
    setUserCount(userCount + 1)
    setUserAllGuessValue([...userAllGuessValue,userGuess])
  }

  const startAgain = () => {
    setDisabled(false)
    setUserCount(0)
    setUserGuess('')
    setMsg('')
    setUserAllGuessValue([])
    setRandomNumber(Math.floor(Math.random() * 10) + 1)
    
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Number Gussing Game</h1>
      <input disabled={disabled} value={userGuess} type="text" onChange={handleValueChange} />
      <br/>
      <button disabled={disabled} onClick={submitHandler}>Submit</button>
      {disabled && 
       <button onClick={startAgain}>Start Again</button>
      }
      <p>{msg}</p>
      <p>Total Count: {userCount}</p>
      <p>Random number: {randomNumber}</p>
      <p>User Guess: {userAllGuessValue?.map((item,index) => {
        return <span key={index}>{item}, { }</span>;
      })}</p>
    </div>
  );
}

export default App;
