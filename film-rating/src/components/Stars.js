import React from "react";
import Star from "./Star";

export default function Stars({ count }) {
    const arr = new Array(count).fill(<Star />);

    return (
        <ul className="card-body-stars">
            <li>
                {arr.map(item => {
                    return (
                        item
                    )
                })}
            </li>
        </ul>
    );
};