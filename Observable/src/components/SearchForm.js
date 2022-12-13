import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeSearchField,
  searchSkillsSuccess,
} from "../actions/actionCreators";

function SearchForm() {
  const { items, loading, error, search } = useSelector(
    (state) => state.skills
  );

  const [searchVal, setSearchVal] = useState("");
  const [itemList, setItemList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setItemList(items);

    if (searchVal === "") {
      setItemList([]);
    }
  }, [items, searchVal]);

  const handleSearch = (event) => {
    const { value } = event.target;

    if (value === "") {
      setSearchVal(value);
      dispatch(changeSearchField(searchVal));
    } else {
      setSearchVal(value);
      dispatch(changeSearchField(searchVal));
    }
  };

  const hasQuery = searchVal.trim() !== "";

  return (
    <>
      <InputGroup className="mb-3" style={{ padding: "0 15px" }}>
        <Form.Control
          value={searchVal}
          type="search"
          onChange={handleSearch}
          placeholder="Введите для поиска"
        />
        <Button variant="outline-secondary">Поиск</Button>
      </InputGroup>
      {!hasQuery && <div>Type something to search...</div>}
      {hasQuery && loading && <div>Loading...</div>}
      {error ? (
        <div>Error occured</div>
      ) : (
        <ul>{itemList && itemList.map((o) => <li key={o.id}>{o.name}</li>)}</ul>
      )}
    </>
  );
}

export default SearchForm;
