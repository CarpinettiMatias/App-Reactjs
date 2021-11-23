import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <Container>
        <ItemListContainer />
      </Container>
    </div>
  );
}

export default App;