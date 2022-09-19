import React from 'react';
import MainLinks from './MainLinks';
import NewsLinks from './NewsLinks';
import ExchangeItems from './ExchangeItems';

//Компонент Header включает
//MainLinks три главные ссылки и дату
//NewsLinks иконку сми, текст-ссылка новости
//ExchangeItems название тикера биржы, его значение и изменение +/-

function Header({ data }) {
  return ( 
    <>
      <MainLinks data={data}/>
      <NewsLinks data={data}/>
      <ExchangeItems data={data}/>
    </>
  );
}

export default Header;