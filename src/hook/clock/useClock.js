import { useEffect, useState } from 'react';

const convertData = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {

    const interval = setInterval(() => {
      const date = new Date();
      setTimeString(convertData(date));

    }, 1000);

    return () => {
      clearInterval(interval);
    }

  }, []);

  return { timeString };
}

export default useClock;