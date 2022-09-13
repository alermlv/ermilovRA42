import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function Form({ handleAdd, dateValue, handleDate, distanceValue, handleDistance, addToList }) {
  return (
    <form className="form" onSubmit={handleAdd}>
      <Input 
        innerText="Дата (ДД.ММ.ГГГГ)"
        type="date"
        name="date" 
        value={dateValue} 
        onChange={handleDate} 
      />
      <Input 
        innerText="Пройдено км" 
        type="number"
        name="distance"
        value={distanceValue} 
        onChange={handleDistance}
        min="0"
      />
      <Button 
        className="button" 
        innerText="Ok"
        addToList={addToList} 
      />
    </form>
  )
}