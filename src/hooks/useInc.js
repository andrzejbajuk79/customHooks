import {useState} from 'react';
export const useInc = (initial = 10) => {
  const [value, setValue] = useState (initial);
  const inc = () => {
    setValue (prev => prev + 1);
  };
  const dec = () => {
    setValue (prev => prev - 1);
  };
  return [value, {inc, dec}];
};
