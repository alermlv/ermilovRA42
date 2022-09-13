import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [form, setForm] = useState({
    name: '',
  });

  const handleSubmit = (e) => e.preventDefault();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const displayRgb = (value) => {
    let result = "rgb(255, 255, 255)";
    const hexValue = value.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
    const hexLength = value.length;

    if (hexValue) {
      const rgbValue = hexValue.slice(1).map(e => parseInt(e, 16)).join(", ");
      result = `rgb(${rgbValue})`;
      document.body.style.backgroundColor = value;
      return result;
    }
    
    if (hexLength === 7 && !hexValue) {
      result = "Ошибка!";
      document.body.style.backgroundColor = "#E74C3C";
      return result;
    };
    
    
    document.body.style.backgroundColor = "#FFF";
    return result;
  };

  return (
    <main>
      <div className="content">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input 
              name="name" 
              placeholder="#000000" 
              maxLength="7"
              value={form.name} 
              onChange={handleChange} 
            />
          </form>
        </div>
        <div className="box rgb-box">
          <span>{displayRgb(form.name)}</span>
        </div>
      </div>
    </main>
  );
}
