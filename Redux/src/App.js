import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

import AddForm from "./components/AddForm";
import FilterForm from "./components/FilterForm";
import ListItems from "./components/ListItems";

function App() {
  return (
    <Container className="App">
      <AddForm />
      <FilterForm />
      <ListItems />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-top: 24px;
`
