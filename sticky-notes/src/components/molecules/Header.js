import React from 'react';
import { MdRefresh } from 'react-icons/md';

function Header({ refresh }) {
  return ( 
    <header className="header">
      <h1>Заметки</h1>
      <MdRefresh className="refresh-icon" onClick={refresh} />
    </header>
  );
}

export default Header;