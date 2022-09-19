import React from 'react';

function NewsLink(props) {
  return ( 
    <>
      {/* Компонент новостей: иконка и текст новости */}
      <a className="icon">
        <img src={props.img} />
      </a>
      <a className="news-text">
        <span>{props.title}</span>
      </a>
    </>
  );
}

export default NewsLink;