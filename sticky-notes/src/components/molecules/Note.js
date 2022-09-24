import React from 'react';
import { MdClose } from 'react-icons/md'

function Note(props) {
  const { id, text, date, handleDeleteNote } = props;
  
  return ( 
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
      </div>
      <MdClose 
        className="close-note-icon" 
        size="1.3em" 
        onClick={() => handleDeleteNote(id)} 
      />
    </div>
   );
}

export default Note;