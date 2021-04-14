import { useState } from 'react';
import './SlideRight.css';

function SlideRight() {
  const [time, setTime] = useState('');
  setInterval(() => {
    const date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const currTime = `${date.getHours()}:${minutes}:${seconds}`;
    setTime(currTime);
  }, 300);

  return <div className="slide-right">{time}</div>;
}

export default SlideRight;
