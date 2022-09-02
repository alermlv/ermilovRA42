import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({ items }) {
    return (
      <>
        <main className="main">
          <div className="container">
            <div className="content list-view">
              {items.map((item) => { 
                return (
                  <ShopItem item={item} /> 
                )
              })}
            </div>
          </div>
        </main> 
      </>
    )
  }