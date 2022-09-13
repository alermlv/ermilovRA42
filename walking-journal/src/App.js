import React, { useState } from 'react';
import Form from './components/molecules/Form';
import List from './components/molecules/List';
import './App.css';
import { nanoid } from 'nanoid';

function App() {
  const [list, setList] = useState([]);
  
  const [dateValue, setDateValue] = useState(new Date().toISOString().substring(0,10));

  const [distanceValue, setDistanceValue] = useState("10");

  const handleDate = (e) => {
    const value = e.target.value;
    setDateValue(value);
  };

  const handleDistance = (e) => {
    const value = e.target.value;
    setDistanceValue(value);
  };

  const addToList2 = () => {
    const newListItem = {
      id: nanoid(),
      date: dateValue,
      distance: distanceValue,
    };

    const target = list.find((item) => item.date === dateValue);
    console.log(target)

    setList(prevListItems => [...prevListItems, newListItem]);
  };

  const addToList = () => {
    const newListItem = {
      id: nanoid(),
      date: dateValue,
      distance: distanceValue,
    };

    const currentIndex = list.findIndex((item) => item.date === dateValue);

    if (currentIndex !== -1) {
      list[currentIndex].distance = (Number(list[currentIndex].distance) + Number(distanceValue)).toString();
      setList([]);
      setList([...list]);
      return;
    }

    setList(prevListItems => [...prevListItems, newListItem]);
  };

  const handleAdd = (e) => {
    e.preventDefault();
  };

  return (
    <main className="main">
      <div className="main__container">
        <Form 
          handleAdd={handleAdd}
          dateValue={dateValue}
          handleDate={handleDate}
          distanceValue={distanceValue}
          handleDistance={handleDistance}
          addToList={addToList}
        />
        <List data={list} setList={setList} />
      </div>
    </main>
  );
}

export default App;