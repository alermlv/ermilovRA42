import React from "react";

export default function ShopItem({ item }) {
    return (
        <div className="product-list">
            <div className="product__img">
                <img src={item.img} />
            </div>
            <div className="product__name">{item.name}</div> 
            <div className="product__color">{item.color}</div> 
            <div className="product__price">${item.price}</div> 
            <button className="product__button">Add to cart</button> 
        </div> 
    )
}