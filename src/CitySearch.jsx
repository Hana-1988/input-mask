import React, { useEffect, useState } from 'react'
import cityList from './cities.json'
import './CitySearch.css'

function CitySearch() {
  const [inputValue, setInputValue] = useState('');
  const [matchedCity, setMatchedCity] = useState('');
 
  useEffect(() => {
    const cityMatch = cityList.find(city => 
      city.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    
    if (cityMatch) {
      setMatchedCity(cityMatch);
    } else {
      setMatchedCity('');
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(capitalizeWords(value));
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div className="input-container">
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="city-input"
      />
      <div className="input-overlay">
          {matchedCity}
      </div>
      <img src='/1.png'/>
    </div>
  );
}

export default CitySearch
