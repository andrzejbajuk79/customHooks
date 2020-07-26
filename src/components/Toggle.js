import React, {useState} from 'react';
import {useToggle} from '../hooks';

const Toggle = () => {
 const {isToggled, toggle} = useToggle(false);
 return (
  <div>
   <button onClick={toggle}>Toogle</button>
   {isToggled && <p>to be toggled</p>}
  </div>
 );
};

export default Toggle;
