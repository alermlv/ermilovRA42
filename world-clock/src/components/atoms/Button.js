import React from "react";
import { MdAdd } from 'react-icons/md';

export default function Button(props) {
  const { className, addClock, innerText } = props;

  return <button 
            className={className} 
            onClick={addClock}
          >
            <MdAdd className="add-icon"/>
            {innerText}
          </button>
}