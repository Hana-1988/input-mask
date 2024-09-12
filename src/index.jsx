import React, { useState } from 'react'
import cities from './cities.json'

function Index() {
  const [inputValue,setInputValue]=useState('');
  const [cityGuess , setCityGuess]=useState('');
  function inputChangeHandler (c){
    const value=c.target.value;
    setInputValue(value);
    const match=cities.find((city)=>city.toLocaleLowerCase()===value.toLocaleLowerCase());
    if(match){
      setCityGuess(match);
    }else{
      setCityGuess('');
    }
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
