import React from 'react';

function ExchangeItem(props) {
  return ( 
    <>
      <div>
        <span>{props.ticker}</span>
        <span>{props.value}</span>
        <span>{props.change}</span>
      </div>
    </>
  );
}

export default ExchangeItem;