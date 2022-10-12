import React from "react";
import { Backdrop, Main, StyledNavLink } from "./BurgerMenu.styled";


const BurgerMenu = () => {

    return (
<Backdrop>
    <Main>
        <ul>
        <StyledNavLink to="/diary">Дневник</StyledNavLink>
        <StyledNavLink to="/calculator">Калькулятор</StyledNavLink>
        </ul>
    </Main>
</Backdrop>
    )
}

export default BurgerMenu;
