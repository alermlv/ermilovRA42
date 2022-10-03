import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Details({ info }) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then(responce => responce.json())
      .then(user => setUserInfo(user))
  }, [info.id])

  return (
    <>
      {userInfo.id && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userInfo.avatar} />
          <Card.Body>
            <Card.Title>{userInfo.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>City: {userInfo.details.city}</ListGroup.Item>
            <ListGroup.Item>Company: {userInfo.details.company}</ListGroup.Item>
            <ListGroup.Item>Position: {userInfo.details.position}</ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </>
  )
};

export default Details;