import React from "react";

export default function ShopCard({ item }) {
    return (
        <div className="product-card">
            <div className="product__name">{item.name}</div> 
            <div className="product__color">{item.color}</div> 
            <div className="product__img">
                <img src={item.img} />
            </div>
            <div className="product__bottom"> 
                <div className="product__price">${item.price}</div> 
                <button className="product__button">Add to cart</button> 
            </div>
        </div>
    )
}