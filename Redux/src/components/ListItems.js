import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem } from '../redux/actions';

function ListItems() {
  const list = useSelector(state => state.listReducers);
  const filter = useSelector(state => state.filterReducers);
  const [data, setData] = useState(list);

  useEffect(() => {
    const newList = filter.value ? filter.content : list;
    setData(newList);
  }, [list, filter]);

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteItem(id));
  };

  function handleEdit(item) {
    dispatch(editItem(item.id, item.name, item.price));
  };

  return (
    <Wrapper>
      <ListGroup className="list">
        {data.map(item => (
          <ListGroup.Item key={item.id} className="list__item">
            {item.name} {item.price}
            <div>
              <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
        </ListGroup.Item>
        ))}
      </ListGroup>
    </Wrapper>
  );
};

export default ListItems;

const Wrapper = styled.div`
  .list {
    margin-top: 8px;

    &__item {
      display: flex;
      justify-content: space-between;
    }
  }

  .edit-button:hover {
    color: blue;
  }

  .delete-button:hover {
    color: red;
  }
`