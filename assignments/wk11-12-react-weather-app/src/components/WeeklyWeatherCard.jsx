import React, { useState, useEffect } from 'react'
import IconConverter from './tools/IconConverter';

export default function WeeklyWeatherCard() {
  const [isOpen, setOpen] = React.useState(false);

  const [weeklyData, setWeeklyData] = useState([]);


  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=51.8333&lon=5.85&exclude=minutely,hourly&appid=bd2eba57d16153bcc8d30de6e03da549&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeeklyData(result);
        console.log(result);
      });
  }, []);

  function DateDisplay() {
    const unixTime = weeklyData.daily[0].dt;
    const date = new Date(unixTime * 1000);

    return date.toLocaleDateString()

  }


  return (
    <div className="accordion-wrapper">

      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <p className="title">
          <DateDisplay />
          <IconConverter iconId={weeklyData.daily[0].weather[0].id} />
        </p>


      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
        <p>temp morning: {weeklyData.daily[0].temp.morn.toFixed(1)}C°</p>
        <p>temp afternoon: {weeklyData.daily[0].temp.day.toFixed(1)}C°</p>
        <p>temp evening: {weeklyData.daily[0].temp.eve.toFixed(1)}C°</p>
        <p>temp night: {weeklyData.daily[0].temp.night.toFixed(1)}C°</p>

        </div>
      </div>
    </div>
  );
}