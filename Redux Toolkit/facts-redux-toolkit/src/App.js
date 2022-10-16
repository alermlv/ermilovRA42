import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FactsSelect from './components/FactsSelect';
import FactsList from './components/FactsList';

function App() {
  return (
    <Container style={{ width: "600px" }}>
      <Row className="mt-3">
        <FactsSelect />
        <FactsList />
      </Row>
    </Container>
  );
}

export default App;
