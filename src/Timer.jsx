import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className='timer'>
      {minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}
    </div>
  );
}

export default Timer;
