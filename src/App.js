import React, {useState} from 'react';
import {Card, CardGrid, Container, Header} from './Elements';
import './App.css';
import Menu from './Menu';
import blue from './extras/blue.png';
import purp from './extras/purp.png';
import black from './extras/black.png';
import green from './extras/green.png';
import Toggle from './components/Toggle';
import Inc from './components/inc';
import Mount from './components/Mount';
import Hover from './components/Hover';
import PageWrapper from './components/PageWrapper';
import Nav from './components/Nav';

function App() {
 return (
  <PageWrapper>
   <Header>
    <Menu />
    <h1>Header</h1>
   </Header>
   <Nav />
   <Container>
    <h2>Super Cool</h2>

    <Toggle />
    <Inc />
    <Mount />
    <Hover />
    <CardGrid>
     <Card style={{background: 'var(--purp)'}}>
      <h3>Some card</h3>
      <img src={purp} />
     </Card>
     <Card style={{background: 'var(--blue)'}}>
      <h3>Some card</h3>
      <img src={blue} />
     </Card>
     <Card style={{background: 'var(--black)'}}>
      <h3>Some card</h3>
      <img src={black} />
     </Card>
     <Card style={{background: 'var(--green)'}}>
      <h3>Some card</h3>
      <img src={green} />
     </Card>
    </CardGrid>
   </Container>
  </PageWrapper>
 );
}

export default App;
