import React from 'react';
import NewPost from '../components/NewPost/NewPost';
import styles from './index.module.scss';

function CreatePost() {

  return (
    <div className="container">
      <div className={styles.content}>
        <NewPost />
      </div>
    </div>
  )
}

export default CreatePost;