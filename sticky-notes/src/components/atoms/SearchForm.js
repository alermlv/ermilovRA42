import React from 'react';
import { MdSearch, MdClose } from 'react-icons/md';

function SearchForm(props) {
  const { searchNote, handleSearchNote, handleClearSearch } = props;

  return ( 
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input 
        type="text" 
        placeholder="напишите для поиска..." 
        value={searchNote}
        onChange={(event) => 
          handleSearchNote(event.target.value)
        }
      />
      <MdClose 
        className="close-icon" 
        size="1.3em" 
        onClick={handleClearSearch}
      />
    </div>
  );
}

export default SearchForm;