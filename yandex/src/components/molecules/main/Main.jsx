import React from 'react';
import MainCard from 'MainCard';

//Компонент состоит из окна рекламы
//и карточек Погода, Телепрограмма, Эфир и др
//карточки получают данные из data.json

function Main({ data }) {
  return ( 
    <div>
      <Advertisement image={data.adv.imgSource} />
      <div>
        {data.map((item) => (
          <MainCard content={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;