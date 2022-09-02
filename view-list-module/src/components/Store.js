import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export default function Store({ products }) {
    const [icon, setIcon] = useState(true);
    const [view, setView] = useState(true);

    const onSwitch = (btn) => {
        const target = btn.target.textContent;
        console.log(target);

        const chooseIcon = () => {
            if (target === 'view_list') {
                return false;
            } else {
                return true;
            }
        };

        setIcon(chooseIcon);
        setView(chooseIcon);
    }

    return (
        <>
            <IconSwitch icon={icon ? 'view_list': 'view_module'} onSwitch={onSwitch} />
            {view ? <ListView items={products} /> : <CardsView cards={products} />}
        </>
    )
}
