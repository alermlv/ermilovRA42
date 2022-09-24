import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'; //генератор id для key
import axios from 'axios'; //запрос на сервер server.json
import Header from './components/molecules/Header';
import NotesList from './components/molecules/NotesList';
import SearchForm from './components/atoms/SearchForm';

//Настройку сервера смотрите в package.json
//"server": "json-server -w server/server.json -p 7777"

function App() {
  //сотояние хранит массив с заметками
  const [notes, setNotes] = useState([]);
  //состояние хранит значение для поиска по заметкам
  const [searchNote, setSearchNote] = useState('');

  //запрос на сервер при каждом изменении массива с заметками
  useEffect(() => {
    axios.get('http://localhost:7777/notes')
      .then(response => response.data)
      .then(data => setNotes(data))
  }, [notes])

  //функц для кнопки обновление списка с сервера
  const refresh = () => {
    axios.get('http://localhost:7777/notes')
      .then(response => response.data)
      .then(data => setNotes(data))
  }

  //функция для кнопки добавить заметку на сервер
  const addNote = (noteText) => {
    const date = new Date();
    axios.post('http://localhost:7777/notes', {
      id: nanoid(),
      content: noteText,
      date: date.toLocaleDateString(),
    })
  }

  //функция для удаления заметки с сервера
  const deleteNote = (id) => {
    axios.delete(`http://localhost:7777/notes/${id}`);
  }

  //для кнопки-крестика очистки формы поиска
  const clearSearch = () => {
    setSearchNote('');
  }

  return (
    <div className="container">
      <Header refresh={refresh} />
      <SearchForm 
        searchNote={searchNote} 
        handleSearchNote={setSearchNote} 
        handleClearSearch={clearSearch} 
      />
      <NotesList 
        notes={notes.filter((note) => 
          note.content.toLowerCase().includes(searchNote)
        )} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote} 
      />
    </div>
  )
}

export default App;