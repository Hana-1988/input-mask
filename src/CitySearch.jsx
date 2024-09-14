import React, { useEffect, useState } from 'react'
import cities from './cities.json'
import styles from './Citysearch.module.css'

function CitySearch() {
  const [inputValue,setInputValue]=useState('');
  const [cityFilter , setCityFilter]=useState([]);
  // function inputChangeHandler (c){
  //   const value=c.target.value;
  //   setInputValue(value);
  //   const match=cities.find((city)=>city.toLocaleLowerCase()===value.toLocaleLowerCase());
  //   if(match){
  //     setCityGuess(match);
  //   }else{
  //     setCityGuess('');
  //   }
  //     }
  useEffect(()=>{
    if(inputValue.length>0){
      const filtered=cities.filter((city)=>
      city.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
      setCityFilter(filtered);
    }else{setCityFilter([])}
  },[inputValue,cities]);


  return (
    <div className={styles.container}>
      <input
       type="text"
       value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)}
       placeholder='Enter city name'
       />
       {cityFilter.length>0 && (<ul>
        {cityFilter.map((city,index)=>(
          <li
          key={index} onClick={()=>setInputValue(city)}>
            {city}
          </li>
        ))}
       </ul>)}
       <img src='/1.png'/>
    </div>
  )
}

export default CitySearch
