import React from "react";

export default function IconSwitch({ icon, onSwitch }) {
    return (
        <>
            <header>
                <div className="container">
                    <div onClick={onSwitch} className="icons-wrapper">
                        <span className="material-icons">{icon}</span>
                    </div>
                </div>
            </header>
        </>
    )
}