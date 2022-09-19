import React from 'react';

//текст под поисковой строкой

function SearchBottom({ data }) {
  return ( 
    <div>
      <div>Найдется все. Например, <a>{data.link}</a></div>
    </div>
  );
}

export default SearchBottom;