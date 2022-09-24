import React from "react";

export default function Input(props) {
  const { name, label, value, handleChange, form } = props;

  const characterLimit = 20; //лимит символов в инпуте

  //если символов не осталось то рамка инпута красная
  const style = {
    border: form.name.length === characterLimit ? "solid red" : "1px solid #000",
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="input"
        style={style}
        maxLength={characterLimit}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}