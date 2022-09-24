import React from "react";

export default function Select(props) {
  const { name, label, value, handleChange, utcList } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select 
          name={name}
          value={value}
          onChange={handleChange}
      >
        {utcList.map(item => (
          <option key={item.id} value={item.offset}>{item.utc}</option>
        ))}
      </select>
    </>
  )
}