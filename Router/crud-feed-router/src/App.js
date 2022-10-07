import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreatePost />} />
        <Route path="/:postId" element={<ViewPost />} />
      </Routes>
    </>
  );
}

export default App;
