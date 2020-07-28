import React, {useContext} from 'react';
import {useAppState} from '../state/PageWrapper';

const Nav = (props) => {
 const {isMenuOpen, toggleMenu} = useAppState();
 if (!isMenuOpen) {
  return null;
 }
 return (
  <nav
   style={{
    background: 'var(--black)',
    color: 'white',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    left: 0,
    right: 0,
   }}
  >
   <h1>Hello</h1>
   <button onClick={toggleMenu}>close</button>
  </nav>
 );
};

export default Nav;
