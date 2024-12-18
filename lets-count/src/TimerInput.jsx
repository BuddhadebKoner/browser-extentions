import React, { useState } from 'react';

const TimerInput = ({ onStart }) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const calculateTotalSeconds = () => {
    const h = parseInt(hours || 0, 10) * 3600;
    const m = parseInt(minutes || 0, 10) * 60;
    const s = parseInt(seconds || 0, 10);
    return h + m + s;
  };

  const handleStart = () => {
    const totalSeconds = calculateTotalSeconds();
    if (totalSeconds > 0) {
      onStart(totalSeconds);
    }
  };

  const handleChange = (e, setValue, maxValue) => {
    let value = e.target.value;
    if (value > maxValue) value = maxValue;
    if (value < 0) value = 0;
    setValue(value);
  };

  return (
    <div className="space-y-6 max-w-lg text-center">
      <p className="text-xl font-semibold">Set Timer</p>
      <div className="flex justify-between space-x-4">
        <input
          type="number"
          value={hours}
          onChange={(e) => handleChange(e, setHours, 24)}
          placeholder="Hrs"
          className="w-1/3 px-4 py-3 bg-gray-600 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          max={24}
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => handleChange(e, setMinutes, 59)}
          placeholder="Mins"
          className="w-1/3 px-4 py-3 bg-gray-600 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          max={59}
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => handleChange(e, setSeconds, 59)}
          placeholder="Secs"
          className="w-1/3 px-4 py-3 bg-gray-600 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          max={59}
        />
      </div>
      <button
        onClick={handleStart}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition duration-200"
      >
        Start Timer
      </button>
    </div>
  );
};

export default TimerInput;
