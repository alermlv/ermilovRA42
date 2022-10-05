import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { filterList } from '../redux/actions';

function SearchForm() {
  const list = useSelector(state => state.listReducers);
  const filter = useSelector(state => state.filterReducers);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { value } = event.target;
    dispatch(filterList(list, value));
  }

  return (
    <Wrapper>
      <InputGroup className="search">
        <Form.Control
          name="search"
          placeholder="Поиск по услугам"
          aria-label="Search for notes"
          value={filter.value}
          onChange={handleChange}
        />
      </InputGroup>
    </Wrapper>
  )
}

export default SearchForm;

const Wrapper = styled.div`
  margin-top: 16px;
`