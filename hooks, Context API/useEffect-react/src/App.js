import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './components/List';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState();

  return (
    <Container>
      <Row className="pt-3" sm={1} md={2} lg={3} xl={3} xxl={4}>
        <Col className="mb-3">
          <List setUser={setUser} />
        </Col>
        <Col>  
          {user && <Details info={user} />}
        </Col>
      </Row>
    </Container>
  )
};

export default App;