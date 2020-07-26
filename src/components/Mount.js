import React from 'react';
import {useMount, useUnMount, useToggle} from '../hooks';

const Mount = (props) => {
 const {isToggled, toggle} = useToggle();
 return (
  <div>
   <button onClick={toggle}>toggle3</button>
   {isToggled && <UnMount />}
  </div>
 );
};

export const UnMount = (props) => {
 useMount(() => {
  console.log('zamontowany');
 });
 useUnMount(() => {
  console.log('odmontowany');
 });
 return <div>unmount me</div>;
};

export default Mount;
