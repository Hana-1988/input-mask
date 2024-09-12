import React, { useState } from 'react'
import cities from './cities.json'

function Index() {
  const [inputValue,setInputValue]=useState('');
  const [cityGuess , setCityGuess]=useState('');
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
