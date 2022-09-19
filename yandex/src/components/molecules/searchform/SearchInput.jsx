import React from 'react';

//Поисковая строка с логотипом, инпутом и кнопкой "найти"

function SearchInput({ data }) {
  // const [search, setSearch] = useState({ value: '' })
  return ( 
    <div>
      <a><img src={data.src} alt={data.alt} /></a>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={search} onChange={handleSearch} ></input>
        <span class="material-symbols-outlined">keyboard</span>
        <button onClick={handleFind}>Найти</button>
      </form>
    </div>
  );
}

export default SearchInput;