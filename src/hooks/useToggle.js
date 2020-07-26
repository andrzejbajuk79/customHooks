import {useState} from 'react';

export const useToggle = initial => {
  const [isToggled, setToggle] = useState (initial);
  const toggle = () => setToggle (prevState => !prevState);
  //mozliwa zmiana nazwy import w komponencie,wg kolejnosci
  // return [isToggled, setToggle, toggle];

  //docelowa nazwa ale bez kolejnosci
  return {isToggled, setToggle, toggle};
};
