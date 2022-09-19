import React from 'react';
import Title from '../../atoms/Title';

//MainLinks методом map выводит из data.json три заголовка
//в шапку сайта
//в data выводится текущая дата

function MainLinks({ data }) {
  return ( 
    <div>
      {data.map((item) => (
        <Title size="3">{item.title}</Title>
      ))}
      <div>{data}</div>
    </div>
   );
}

export default MainLinks;