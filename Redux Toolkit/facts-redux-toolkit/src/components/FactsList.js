import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function FactsList() {
  const facts = useSelector(state => state.facts.content);

  return (
    <ListGroup style={{ padding: "0 15px" }}>
      {facts && facts.map(fact => (
        <ListGroup.Item key={fact.id}>{fact.text}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default FactsList;