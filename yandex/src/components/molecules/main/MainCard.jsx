import React from 'react';

function MainCard({ content }) {

  //в data.json в свойстве innerContent объект с данными по содержанию карточек
  //const cardInnerContent = content.innerContent

  return ( 
    <div>
        <Title size="3">{item.title}</Title>
        <div>
          {cardInnerContent.map((item) => (
            <div Строчка текста в карточке>
              <div>Слева иконка/время телепрограммы или ничего</div>
              <div>Центральный текст</div>
              <div>Справа Дополнительный текст</div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default MainCard;