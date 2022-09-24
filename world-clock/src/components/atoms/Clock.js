import React, { useEffect, useState }  from 'react';
import { MdClose } from 'react-icons/md';

function Clock(props) {
  const { clockObj, deleteClock } = props;
  
  //состояние хранит ЧЧ ММ СС
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //Кажду секунду обновляем тикание часов
  useEffect(() => {
    setInterval(() => {
      handleClock();
    }, 1000)
  }, [])

  //Обработчик времени на циферблате
  const handleClock = () => {
    let date = new Date(); //получаем текущее локальное время
    let localeOffset = date.getTimezoneOffset() / 60; //локальный offset = -3 
    date.setHours(date.getHours() + localeOffset) //устанавливаем время на UTC±0

    //у каждого объекта часов есть ключ offset
    //устанавливаем время каждых часов как
    //время UTC±0 + значение offset
    let hoursValue = date.getHours() + Number(clockObj.offset);
    let minutesValue = date.getMinutes();
    let secondsValue = date.getSeconds();

    setTime({
      hours: hoursValue,
      minutes: minutesValue,
      seconds: secondsValue,
    })
  }

  //стили для поворота стрелок на часах
  const hoursStyle = {
    transform: `rotateZ(${time.hours / 12 * 360}deg)`
  }
  
  const minutesStyle = {
    transform: `rotateZ(${time.minutes / 60 * 360}deg)`
  }
  
  const secondsStyle = {
    transform: `rotateZ(${time.seconds / 60 * 360}deg)`
  }

  return ( 
    
    <div className="clock">
      <div className="clock__title">{clockObj.name}</div>
      <div className="clock__frame">
        <div className="clock__face">
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          <div className="hour" style={hoursStyle}></div>
          <div className="minute" style={minutesStyle}></div>
          <div className="second" style={secondsStyle}></div>
          <button 
            className="close-clock-button"
            onClick={deleteClock}
          >
            <MdClose className="close-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clock;