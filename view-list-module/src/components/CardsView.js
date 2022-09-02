import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="content cards-view">
            {cards.map((item) => { 
              return (
                <ShopCard item={item} /> 
              )
            })}
          </div>
        </div>
      </main> 
    </>
  )
}