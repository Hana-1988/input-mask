import React, { useEffect, useState } from 'react'
import cities from './cities.json'
import styles from './Citysearch.module.css'

function CitySearch() {
  const [inputValue,setInputValue]=useState("");
  const [matchedCity, setMatchedCity]=useState("");
 
  useEffect(()=>{
    const cityMatch = cities.find(city=>city.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase()));
    if(cityMatch){
      setMatchedCity(cityMatch);
    }else{setMatchedCity("");
  }},[inputValue]);

  const handleInputChange=(e)=>{
    const value = e.target.value;
    setInputValue(capitalizeWords(value));
  };

  const capitalizeWords=(str)=>{
    return str.replace(/\b\w/g , char => char.toUpperCase());
  };

  return (
    <div className={styles.container}>
      <input
       type="text"
       value={inputValue}
       onChange={handleInputChange}
       placeholder='Enter city name'
       />
       <div className={styles.input-overlay}>
        {
          inputValue && matchedCity && matchedCity.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase())
          ? matchedCity : ""
        }
       </div>
       <img src='/1.png'/>
    </div>
  )
}

export default CitySearch
