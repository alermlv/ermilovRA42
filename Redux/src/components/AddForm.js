import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useSelector, useDispatch } from 'react-redux';
import { changeForm, addItem, clearForm, updateItem } from '../redux/actions';


function AddForm() {
  const form = useSelector(state => state.formReducers);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(changeForm(name, value));
  };
  
  function handleAdd() {
    if (form.name === "" || form.value === "" ) return;

    if (form.id) {
      dispatch(updateItem(form.id, form.name, form.price));
    } else {
      dispatch(addItem(form.name, form.price));
    };
  };

  function handleCancelAdd() {
    dispatch(clearForm());
  };

  return (
    <InputGroup className="input">
      <Form.Control
        name="name"
        placeholder="Название услуги"
        aria-label="Name of service"
        value={form.name}
        onChange={handleChange}
      />
      <Form.Control
        name="price"
        placeholder="Цена услуги"
        aria-label="Service price"
        value={form.price}
        onChange={handleChange}
      />
      <Button variant="outline-secondary" onClick={handleAdd}>Add</Button>
      {form.id && <Button variant="outline-secondary" onClick={handleCancelAdd}>Cancel</Button>}
    </InputGroup>
  );
};

export default AddForm;

