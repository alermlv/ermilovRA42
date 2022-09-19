import React from 'react';
import NewsLink from '../../atoms/NewsLink';

//NewsLinks методом map передает из data.json в компонент NewsLink
//ссылку на иконку сми и текст новости

function NewsLinks({ data }) {
  return ( 
    <>
      {/* Берем данные из json и выводим
      список новостей методом map */}
      <div>
        {data.map((item) => {
          return(
            <NewsLink img={item.img} title={item.title}/>
          )
        })}
      </div>
    </>
  );
}

export default NewsLinks;