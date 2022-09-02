import React from "react";
import Portfolio from "./Portfolio";

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="container">
            <button onClick={() => selected(Portfolio)} className="filter__button selected">All</button>
            {filters.map((val) => {
                return <button onClick={() => onSelectFilter(val)} className="filter__button">{val}</button>
            })}
        </div>
    )
}

export default Toolbar;