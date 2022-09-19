import React from 'react';
import ExchangeItem from '../../atoms/ExchangeItem';

function ExchangeItems({ data }) {
  return ( 
    <>
      {/* Берем данные из json и выводим
      список данных биржи методом map */}
      <div>
        {data.map((item) => {
          return(
            <ExchangeItem 
              ticker={item.ticker}
              value={item.value}
              change={item.change}
            />
          )
        })}
        Троеточие google icons
        <span class="material-symbols-outlined">more_horiz</span>
      </div>
    </>
  );
}

export default ExchangeItems;