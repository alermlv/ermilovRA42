import React from "react";

export default function Listing({ items }) {
    const cutStr = str => {
        if (!str) return;

        return str.length > 50 ?
            str.slice(0, 50) + "..." : str;
    };

    const handleCurrency = (curr, num) => {
        let result;

        switch (curr) {
            case "USD":
                result = `$${num}`;
                break;
            case "EUR":
                result = `€${num}`;
                break;
            case "GBP":
                result = `${num} GBP`;
                break;
            default:
                result = num;
        }

        return result;
    };

    const styleQuantity = (num) => {
        let styleList = ["item-quantity"];

        if (!num) return;

        if (num <= 10) {
            styleList.push("level-low");
        } else if (num > 10 && num <= 20) {
            styleList.push("level-medium");
        } else {
            styleList.push("level-high");
        }

        return styleList.join(" ");
    }

    return (
        <>
            <div className="item-list">
                {items.map(item => {
                    return (
                        <div className="item">
                            <div className="item-image">
                                <a href={item.url}>
                                    <img src={item.MainImage?.url_570xN} />
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{cutStr(item.title)}</p>
                                <p className="item-price">{handleCurrency(item.currency_code, item.price)}</p>
                                <p className={styleQuantity(item.quantity)}>{item.quantity} left</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}