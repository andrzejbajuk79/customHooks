import {useState} from 'react';
export const useInc = ({
 step = 1,
 initial = 0,
 maxValue = 10000,
 minValue = -10000,
}) => {
 const [value, setValue] = useState(initial);
 const inc = () => {
  setValue((prev) => (prev + step >= maxValue ? maxValue : prev + step));
 };
 const dec = () => {
  setValue((prev) => (prev - step <= minValue ? minValue : prev - step));
 };
 const reset = () => setValue(initial);
 return [value, {inc, dec, reset}];
};
