import React from 'react';
import CurrentPost from '../components/CurrentPost/CurrentPost';
import styles from './index.module.scss';

function ViewPost() {
  return (
    <div className="container">
      <div className={styles.content}>
        <CurrentPost />
      </div>
    </div>
  )
}

export default ViewPost;