import React from 'react';
import {useInc} from '..//hooks';
const Inc = (props) => {
 const [volume, {dec, inc, reset}] = useInc({
  maxValue: 50,
  minValue: 0,
  initial: 7,
  step: 2,
 });
 return (
  <div>
   <h3>Volume</h3>
   <button onClick={dec}>-</button>
   {volume}

   <button onClick={inc}>+</button>
   <button onClick={reset}>Reset</button>
  </div>
 );
};

export default Inc;
