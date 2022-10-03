import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function List({ setUser }) {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(responce => responce.json())
      .then(users => setUsersList(users))
  }, [])

  return (
    <ListGroup style={{ width: '18rem' }}>
      {usersList.map((user) => (
        <ListGroup.Item key={user.id} onClick={() => setUser(user)} >{user.name}</ListGroup.Item>
      ))}
    </ListGroup> 
  )
};

export default List;