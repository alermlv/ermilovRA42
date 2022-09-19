import React from 'react';
import Title from '../../atoms/Title';

//SearchLinks методом map выводит 7 ссылок над
//поисковой строкой и "еще"

function SearchLinks({ data }) {
  return ( 
    <div>
      {data.map((item) => (
        <Title size="3">{item.title}</Title>
      ))}
      <div>еще</div>
    </div>
  );
}

export default SearchLinks;