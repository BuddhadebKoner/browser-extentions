import React, { useEffect } from 'react';

const CountdownTimer = ({ timeLeft, setTimeLeft, onReset }) => {
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else {
      onReset();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, setTimeLeft, onReset]);

  const formatTime = (time) => {
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="text-center">
      <p className="text-[15vw] font-bold mb-6">{formatTime(timeLeft)}</p>
      <button
        onClick={onReset}
        className="px-2 py-2 hover:bg-red-500 rounded-lg font-semibold transition duration-200"
      >
        Reset Timer
      </button>
    </div>
  );
};

export default CountdownTimer;
