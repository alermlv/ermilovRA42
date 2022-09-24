import React from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Button from "../atoms/Button";

export default function Form(props) {
  const { handleSubmit, handleChange, addClock, utcList, form } = props;

  return (
    <form className="world-clock__form" onSubmit={handleSubmit}>
      <Input 
        label="Название"
        name="name"
        handleChange={handleChange}
        form={form}
      />
      <Select 
        label="Временная зона" 
        name="offset"
        handleChange={handleChange}
        utcList={utcList}
      />
      <Button 
        className="add-clock-button" 
        innerText="Добавить"
        addClock={addClock}
      />
    </form>
  )
}