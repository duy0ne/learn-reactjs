import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

KpiMap.propTypes = {

};

function KpiMap(props) {
  const [lable, setLable] = useState(true);
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {

    if (!lable) {
      countRef.current = setInterval(() => {
        setCount((countPrev) => countPrev + 1)
      }, 1000)
    }
    //return clearInterval(countRef.current);
  }, [lable])

  const handleClick = () => {
    setLable(!lable);

    if (!lable) {
      clearInterval(countRef.current)
    }
  }

  // const handleClick = () => {
  //   setLable(!lable);

  //   if (lable) {
  //     countRef.current = setInterval(() => {
  //       setCount((count) => count + 1)
  //     }, 1000)
  //   } else {
  //     clearInterval(countRef.current)
  //   }
  // }

  return (
    <div>
      <h1>{count}</h1>
      {<Button variant="outlined" onClick={handleClick}>{lable ? 'START' : 'STOP'}</Button>}
    </div>
  );
}

export default KpiMap;