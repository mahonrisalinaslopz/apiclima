import  React, { useEffect, useState } from 'react';

const WeatherCard = () => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;
    

    const [weatherIcon, SetWeatherIcon] = useState("");
    let sec = sunset;
    let date = new Date( sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    useEffect (() => {
        if (weathermood) {
            switch (weathermood){
                case "Clouds":
                    SetWeatherIcon("wi-day-cloudy");
                    break;
                case "Haze":
                    SetWeatherIcon("wi-fog");
                    break;
                case "Clear":
                    SetWeatherIcon("wi-day-sunny");
                    break;
                case "Mist":
                    SetWeatherIcon("wi-fog");
                    break;
                    default:
                    SetWeatherIcon("wi-fog");
                    break;
            }
        }
    }, [weathermood]);
    return  (
        <div>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherIcon}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>

                    <div className='description'>
                    <div className='weatherCondition'>{weathermood}</div>
                    <div className='place'>
                        {name}, <b>{country}</b>
                    </div>
                    </div>

                </div>

            </article>
        </div>
    )
};