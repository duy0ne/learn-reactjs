import { useEffect, useRef, useState } from 'react';

useMagicColor.propTypes = {

};

const handleRadomColor = (currentColor) => {
  const COLOR = ['blue', 'gray', 'pink'];
  let color = currentColor;

  while (color === currentColor) {
    const idx = Math.trunc(Math.random() * 3);
    color = COLOR[idx];
  };

  return color;
}

function useMagicColor(props) {
  const [color, setColor] = useState('red');
  const currentColor = useRef(null);

  useEffect(() => {
    setInterval(() => {
      const newColor = handleRadomColor(currentColor.current);
      currentColor.current = newColor;
      setColor(newColor);
    }, 4000);
  }, [])

  return { color };
}

export default useMagicColor;