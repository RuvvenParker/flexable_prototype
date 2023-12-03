import React, { useEffect, useState } from 'react';
import './Calendar.css';

export default function Calendar() {
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [currentDay, setCurrentDate] = useState(new Date().getDay());
    
    useEffect(() => {
        // Create an array to store the days of the week
        const today = new Date();
        const days = [
        { name: "Sun", date: new Date(today.setDate(today.getDate() - today.getDay())) },
        { name: "Mon", date: new Date(today.setDate(today.getDate() - today.getDay() + 1)) },
        { name: "Tue", date: new Date(today.setDate(today.getDate() - today.getDay() + 2)) },
        { name: "Wed", date: new Date(today.setDate(today.getDate() - today.getDay() + 3)) },
        { name: "Thu", date: new Date(today.setDate(today.getDate() - today.getDay() + 4)) },
        { name: "Fri", date: new Date(today.setDate(today.getDate() - today.getDay() + 5)) },
        { name: "Sat", date: new Date(today.setDate(today.getDate() - today.getDay() + 6)) },
    ];
        setDaysOfWeek(days);
    }, []);

    const todayz = new Date();

    //Params for length of day
    const start = 5; //day starts with this timing
    const end = 23; //day ends with this timing
    const times = Array.from({ length: end - start + 1 }, (_, index) => start + index);

    const [elementClass, setElementClass] = useState('initial-class');

    const changeElementClass = () => {
        // Change the classname to a new value
        setElementClass('event double');
    };
    
  return (
 <div class="calendar">
  
  <header>
      <button class="secondary">Today</button>
      <div class="calendar__title">
        <span class="icon secondary chevron_left">‹</span>
        <span>{todayz.getDate()}/{todayz.getMonth()+1}/{todayz.getFullYear()}</span>
        <span class="icon secondary chevron_left">›</span>
      </div> 
      <div></div>
  </header>
  
  <div class="outer">

  
  <table>
  <thead>
    <tr>
      <th class="headcol"></th>
      {daysOfWeek.map((day, index) => (
        <th>
          <div key={index} className={`day ${index === currentDay ? 'today' : ''}`}>{day.name} ・ {day.date.getDate()}</div></th>))}
    </tr>
  </thead>
  </table>

<div class="wrap"> 
  <table class="offset">

  <tbody>

    {times.map((time) => {
    return (
        <>
        <tr key={time}>
            <td class="headcol">{time}:00</td>
            {daysOfWeek.map((day) => {
                return(
                    <td className={day.name + time}></td>
                )
            })}
        </tr>
        <tr>
            <td class="headcol"></td>
            {daysOfWeek.map((day) => {
                return(
                    <td className={day.name + time+0.5}></td>
                )
            })}
        </tr>
        </>
    );  
    })}
    <tr>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><div className="event double"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>8:30–9:30 Yoga</div></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="headcol">9:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="headcol">10:00</td>
      <td></td>
      <td></td>
      <td><div className="event double"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>10:00–11:00 Meeting</div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
  )
}
