'use client'
import './globals.css'
import { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval:any;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  const formatTime = (timeInSeconds:number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="title">Stop watch</h1>
      <h1 className="stopwatch">{formatTime(time)}</h1>
      <div className="controls">
        {!isActive ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
     
    </div>
  );
};

export default Stopwatch;
