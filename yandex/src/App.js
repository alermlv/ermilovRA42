import React from 'react';
import './App.css';
import Header from './components/molecules/header/Header';
import SearchForm from './components/molecules/searchform/SearchForm';
import Main from './components/molecules/main/Main';
//import data from './data/data';

//В данном примере все компоненты используют data.json
//Компонент App содержит Шапку страницы
//Поисковую строку и Секцию Main с карточками: погода, телепрограмма и др
//Рекламные окна реализуются отдельным настраиваемым компонентом атомом Advertisement

function App() {
  return (
    <>
      <Header data={data}/>
      <SearchForm data={data}/>
      <Main data={data}/>
    </>
  );
}

export default App;
