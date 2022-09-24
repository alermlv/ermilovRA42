import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

function NotesList(props) {
  const { notes, handleAddNote, handleDeleteNote } = props;
  
  return ( 
    <div className="notes-list">
      {notes.map((note) => (
        <Note 
          key={note.id}  
          id={note.id}
          text={note.content}  
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
        ))}
        <AddNote handleAddNote={handleAddNote} />
    </div>
   );
}

export default NotesList;