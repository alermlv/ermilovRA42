import React from "react";

export default function Button({ className, addToList, innerText }) {
  return <button className={className} onClick={addToList}>{innerText}</button>
}