import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Container style={{ width: "600px" }}>
      <Row className="mt-3">
        <SearchForm />
      </Row>
    </Container>
  );
}

export default App;
