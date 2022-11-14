import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../actions/actionCreators";

function SearchForm() {
  const {items, loading, error, search} = useSelector(state => state.skills);
  const dispatch = useDispatch();
  
  const handleSearch = event => {
    const {value} = event.target;
    dispatch(changeSearchField(value))
  }
  return (
    <>
      <InputGroup className="mb-3" style={{ padding: "0 15px" }}>
        <Form.Control
          value={search}
          type="search"
          onChange={handleSearch}
          placeholder="Введите для поиска"
        />
        <Button variant="outline-secondary">Поиск</Button>
      </InputGroup>
      {error ? <div>Error occured</div> : <ul>{items.map(
        o => <li key={o.id}>{o.username}</li>
      )}</ul>}
    </>
  );
}

export default SearchForm;
