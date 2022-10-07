import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { HomePage, DriftPage, TimeAttackPage, ForzaPage } from './components';

export default function App() {
  return (
      <Router>
        <Menu />
        <Routes className="page">
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </Router>
  );
};
