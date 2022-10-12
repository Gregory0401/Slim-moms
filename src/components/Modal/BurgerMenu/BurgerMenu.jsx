import React from "react";
import { Backdrop, Main, StyledNavLink } from "./BurgerMenu.styled";


const BurgerMenu = ({onToggleModal}) => {

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onToggleModal();
        }
      };

    return (
<Backdrop onClick={handleBackdropClick}>
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
