import React from 'react';
import SearchLinks from './SearchLinks';
import SearchInput from './SearchInput';
import SearchBottom from './SearchBottom';

//Компонент с поисковой строкой по середине
//Ссылками над поиском
//Текстом под строкой поиска

function SearchForm({ data }) {
  return ( 
    <div>
      <SearchLinks data={data}/>
      <SearchInput data={data}/>
      <SearchBottom data={data}/>
    </div>
  );
}

export default SearchForm;