import React, { useState, useEffect } from 'react';
import weathercardbackground from '../images/weathercardbackground.png'
import IconConverter from './tools/IconConverter'

export default function CurrentWeatherCard({ city }) {

    const [currentData, setCurrentData] = useState([]);


    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd2eba57d16153bcc8d30de6e03da549&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                setCurrentData(result);
                console.log(result);
            });
    },
        [city]);


    return (
        <div className="weather-card-front">
            {typeof currentData.main != "undefined" ? (

                <div className="weather-card-container">

                    <img className="background-image" src={weathercardbackground} alt="background" />

                    <div className="weather-card-info">


                        <div className="icon">
                            <IconConverter iconId={currentData.weather[0].id} />
                        </div>

                        <div className="text-container">
                            <p>{currentData.name}, {currentData.sys.country}</p>

                            <hr />
                            <p className="temperature-main">{currentData.main.temp.toFixed(1)}C°</p>
                            <p>min temp: {currentData.main.temp_min.toFixed(1)}C°</p>
                            <p>max temp: {currentData.main.temp_max.toFixed(1)}C°</p>
                            <p>humidity: {currentData.main.humidity.toFixed(1)}%</p>
                        </div>
                    </div>

                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}





