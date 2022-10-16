import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import factsData from '../data/factsData';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from '../redux/countSlice';
import { addFacts } from '../redux/factsSlice';

function FactsSelect() {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch();
  
  const [facts, setFacts] = useState(factsData);

  function handleChange(event) {
    const { value } = event.target;
    dispatch(addCount(value));
  };

  function showFacts() {
    const shuffled = [...facts].sort(() => 0.5 - Math.random());
    const result = shuffled.slice(0, count);
    dispatch(addFacts(result));
  };

  return (
    <InputGroup className="mb-3" style={{ padding: "0 15px" }}>
      <Form.Select 
        aria-label="Number of facts about Star Wars"
        onChange={handleChange}
      >
        <option>Выберите количество фактов</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <Button 
        variant="outline-secondary"
        onClick={showFacts}
      >
        Показать
      </Button>
    </InputGroup>
  )
}

export default FactsSelect;