import React from "react";

export default function ListItem({ data, item, setList }) {

  const formatDate = (date) => {
    const [year, month, day] = date.split('-')
    const dateArr = [day, month, year]
    const dateStr = dateArr.join('.')
    return dateStr;
  }

  const removeFromList = () => {
    setList(data.filter((_item) => _item.id !== item.id))
  }

  return (
    <li>
      <span className="data-date">{formatDate(item.date)}</span>
      <span className="data-distance">{item.distance}</span>
      <button className="data-btn" onClick={removeFromList}><span className="material-symbols-outlined">close</span></button>
    </li>
  )
}