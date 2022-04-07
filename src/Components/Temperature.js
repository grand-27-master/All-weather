import './styles.css';
import {useEffect,useState} from 'react';
import Weathercard from './Weathercard';

export default function Temperature()
{

    const [searchValue,setSearchValue]=useState("ahmedabad");
    const [tempInfo,setTempInfo]=useState({});


    const getInfo=async()=>{
        try {
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ac157a251c3667c533b9d6a3fc359e47`);
            const data=await response.json();

            // console.log(data);

            const{temp,humidity,pressure}=data.main;
            const{main:weathermood}=data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood ,
                name,
                speed,
                country,
                sunset,
              };

              setTempInfo(myNewWeatherInfo);
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getInfo();
        // document.title.write=`${searchValue}`;
    })

    return(
        <>
       <div className="searchbar">
        <div className="search"></div>
        <input type="text" placeholder='Enter your city' className='search-city' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <button type="button" className="searchButton" onClick={getInfo}>Search</button>
       </div>

       <Weathercard tempInfo={tempInfo}/>
        </>
    );
}


