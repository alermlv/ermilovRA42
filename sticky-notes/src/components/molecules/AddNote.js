import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Button from '../atoms/Button';

function AddNote({ handleAddNote }) {
  //сосотояние содержит ввод текста в textarea
  const [noteText, setNoteText] = useState('');

  //лимит знаков для заметки
  const characterLimit = 100;

  //обработчик ввода в textarea
  const handleChange = (event) => {
    if (noteText.length < 100) {
      setNoteText(event.target.value);
    }
  };

  //для кнопки Добавить
  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return ( 
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Напишите текст заметки..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} символов</small>
        <Button 
          className="save-button" 
          onClick={handleSaveClick}
        >
          <MdAdd className="add-icon"/> Добавить
        </Button>
      </div>
    </div>
   );
}

export default AddNote;