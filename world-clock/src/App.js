import React, { useState } from 'react';
import Form from './components/molecules/Form'
import Clocks from './components/molecules/Clocks';
import utcList from './data/utcList.json' //содержит список временных зон для селекта 
import { nanoid } from 'nanoid'; //генерация ключа для key

//Компонент App рендерит Компонент Form - инпут, селект и кнопка
//и Clocks - часы с названием и циферблатом
//у каждых часов состояние и эффект тикания каждую секунду

function App() {
  //состояние для инпута и селекта
  const [form, setForm] = useState({ 
    name: '', //инпут Название
    offset: '', //селект Временная зона
  })

  //состояние массив с данными по каждым часам
  const [clocksList, setClocksList] = useState([
    { id: nanoid(), name: 'Москва', offset: '3' },
  ])

  //убираем обновление страницы при нажатии в форме
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  //обработчик ввода данных в форме
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      }
    })
  }

  //функция для кнопки в Form - создает объект новых часов
  //и пушит в массив с уже сущ часами
  const addClock = () => {
    const newClock = {
      id: nanoid(),
      name: form.name,
      offset: form.offset,
    };

    setClocksList(prevClocks => [...prevClocks, newClock]);
  }

  //функция для кнопки в Clock удалить одни часы
  const deleteClock = (id) => {
    setClocksList(prevClocks => prevClocks.filter(clock => clock.id !== id))
  }

  return ( 
    <div className="world-clock">
      <div className="container">
        <Form 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          addClock={addClock} 
          utcList={utcList} //для временных зон в селект
          form={form} //для отрисовки стилей когда вводим макс символов в инпут
        /> 
        <Clocks 
          clocksList={clocksList}
          deleteClock={deleteClock}
        />
      </div>
    </div>
  );
}

export default App;