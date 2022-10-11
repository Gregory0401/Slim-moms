import React from "react";
import { Backdrop, Main, Link } from "./BurgerMenu.styled";

const BurgerMenu = () => {

    return (
<Backdrop>
    <Main>
        <ul>
            <Link>дневник</Link>
            <Link>калькулятор</Link>
        </ul>
    </Main>
</Backdrop>
    )
}

export default BurgerMenu;
