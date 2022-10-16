import React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import ImagesList from './components/ImagesList';

function App() {
  return (
    <div className="App">
      <Container style={{maxWidth: "656px"}}>
        <Header />
        <ImagesList />
      </Container>
    </div>
  );
};

export default App;