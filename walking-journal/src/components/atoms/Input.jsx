import React from "react";

export default function Input(props) {
  const { innerText, type, name, value, onChange, min, placeholder } = props;

  return (
    <>
      <label htmlFor={name}>{innerText}</label>
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        min={min} 
        placeholder={placeholder} 
      />
    </>
  )
}