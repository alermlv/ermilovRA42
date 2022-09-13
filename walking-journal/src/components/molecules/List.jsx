import React from "react";
import ListHeaderItem from "../atoms/ListHeaderItem";
import ListItem from "../atoms/ListItem";

export default function List({ data, setList }) {
  return (
    <>
      <div className="list__header">
        <ListHeaderItem innerText="Дата (ДД.ММ.ГГ)" />
        <ListHeaderItem innerText="Пройдено км" />
        <ListHeaderItem innerText="Действия" />
      </div>
      <ul className="list">
        {data
          .sort((a, b) => {
            return new Date(b.date) -  new Date(a.date)
          }) 
          .map((item) => (
            <ListItem key={item.id} data={data} item={item} setList={setList} />
        ))}
      </ul>
    </>
  )
}