import React, { useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Toolbar from './components/Toolbar';
import ProjectList from './components/ProjectList';

function App() {
  const [projects, selected] = useState(Portfolio);

  const filters = [...new Set(Portfolio.map((item) => item.category))];

  const onSelectFilter = (filter) => {
    const filtered = Portfolio.filter((val) => {
      return val.category === filter;
    });
    selected(filtered);
  };

  return (
    <>
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
      <ProjectList projects={projects} />
    </>
  );
}

export default App;
