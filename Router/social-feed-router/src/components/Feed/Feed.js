import React from 'react';
import styles from './Feed.module.scss';
import Post from '../Post/Post';

function Feed(props) {
  const { list } = props;

  return (
    <div className="container">
      <div className={styles.content}>
        {list.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed;