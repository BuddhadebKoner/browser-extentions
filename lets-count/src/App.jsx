import React, { useState, useEffect } from 'react';
import TimerInput from './TimerInput';
import CountdownTimer from './CountdownTimer';

const App = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // Load timer from localStorage on initial render
  useEffect(() => {
    const savedTimeLeft = parseInt(localStorage.getItem('timeLeft'), 10);
    const startTime = parseInt(localStorage.getItem('startTime'), 10);
    if (savedTimeLeft && startTime) {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remainingTime = savedTimeLeft - elapsed;

      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
        setIsRunning(true);
      } else {
        localStorage.removeItem('timeLeft');
        localStorage.removeItem('startTime');
      }
    }
  }, []);

  const handleStart = (totalSeconds) => {
    setTimeLeft(totalSeconds);
    setIsRunning(true);
    localStorage.setItem('timeLeft', totalSeconds);
    localStorage.setItem('startTime', Date.now());
  };

  const handleReset = () => {
    setTimeLeft(null);
    setIsRunning(false);
    localStorage.removeItem('timeLeft');
    localStorage.removeItem('startTime');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white no-select">
      {!isRunning ? (
        <TimerInput onStart={handleStart} />
      ) : (
        <CountdownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
