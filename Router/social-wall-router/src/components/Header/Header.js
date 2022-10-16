import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className="container">
      <div className={styles.header}>
        <Link to="/new">
          <Button variant="primary">Создать пост</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header;