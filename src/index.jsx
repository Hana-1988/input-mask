import React, { useState } from 'react'
import cities from './cities.json'

function Index() {
  const [inputValue,setInputValue]=useState('');
  const [cityGuess , setCityGuess]=useState('');
  function inputChangeHandler (c){
    const value=c.target.value;
    setInputValue(value);
      }
  return (
    <div>
      <input
       type="text"
       value={inputValue}
       onChange={inputChangeHandler}
       placeholder='Enter city name'
       />

    </div>
  )
}

export default Index
