import React from 'react';
import './App.css';
import Card from './components/molecules/Card';

function App() {
  const style = {
    width: '18rem'
  };

  return (
    <>
      <Card style={style}>
        <img src="./img/img.png" className="card-img-top" />
      </Card>
      
      <Card spacing="mt-5" style={style} />
    </>
  );
}

export default App;
