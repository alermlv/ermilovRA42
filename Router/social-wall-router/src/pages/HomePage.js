import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Wall from '../components/Wall/Wall';
import axios from 'axios';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios.get('http://localhost:7777/posts')
      .then(responce => responce.data)
      .then(data => setPosts(data))
  };

  return (
    <>
      <Header />
      {posts && <Wall list={posts}/>}
    </>
  )
}

export default HomePage;