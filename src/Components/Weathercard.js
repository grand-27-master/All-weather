import { useEffect,useState } from "react";

export default function Weathercard({tempInfo})
{

    const [weatherIcon,setWeatherIcon]=useState("");

    const{
        temp,
        humidity,
        pressure,
        weathermood ,
        name,
        speed,
        country,
        sunset,
      }=tempInfo;

      useEffect(()=>{

        switch (weathermood) {
            case "Clouds":
                setWeatherIcon("wi-day-cloudy")
                break;

            case "Haze":
                setWeatherIcon("wi-fog")
                break;    
             
            case "Clear":
                setWeatherIcon("wi-day-sunny")
                break;   
                
            case "Smoke":
                setWeatherIcon("wi-smoke")
                break;           
        
            default:
                setWeatherIcon("wi-day-sunny")
                break;
        }

      },[weathermood]);

    //   converting seconds to hours
      let sec = sunset;
      let date = new Date(sec * 1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return(<>
    <div className="widget">
           <div className="weatherIcon">
               <i className={`wi ${weatherIcon}`}></i>
           </div>

           <div className="weatherInfo">
               <div className="temperature">{temp}&deg;C</div>
               <div className="description">            
                   <div className="weatherCondition">{weathermood}</div>
                   <div className="place">{name},{country}</div>
               </div>
           </div>
           <div className="date"> {new Date().toLocaleString()} </div>

           <div className="extra-temp">
               <div className="temp-info-minmax">
                   <div className="two-sided-section">
                   <p><i className={"wi wi-sunset"}></i></p>
                   <p className="extra-info-leftside">
                       {timeStr} <br />
                       Sunset
                       </p>
                   </div>

                   <div className="two-sided-section">
                   <p><i className={"wi wi-humidity"}></i></p>
                   <p className="extra-info-leftside">
                       {humidity}% <br />
                       Humidity
                       </p>
                   </div>
               </div>

               <div className="weather-extra-info">
               <div className="two-sided-section">
                   <p><i className={"wi wi-rain"}></i></p>
                   <p className="extra-info-leftside">
                       {pressure}pa <br />
                       Pressure
                       </p>
                   </div>

                   <div className="two-sided-section">
                   <p><i className={"wi wi-strong-wind"}></i></p>
                   <p className="extra-info-leftside">
                       {speed}km/h <br />
                       Speed
                       </p>
                   </div>
               </div>
           </div>
       </div>
    </>);
}