import React, {useState, useMemo} from 'react';
import {useHover} from '../hooks';
import {Card} from '../Elements';
import purp from '../extras/purp.png';

const Hover = (props) => {
 const [isHovered, bind] = useHover();
 return (
  <div>
   <Card
    {...bind}
    style={{background: isHovered ? 'var(--black)' : 'var(--purp)'}}
   >
    <h3>Some card</h3>
    <img src={purp} />
   </Card>
  </div>
 );
};

export default Hover;
