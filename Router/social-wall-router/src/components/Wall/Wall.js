import React from 'react';
import Post from '../Post/Post';

function Feed(props) {
  const { list } = props;

  return (
    <div className="container">
      {list.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed;