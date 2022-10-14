import React from 'react';
import { Backdrop, Main, StyledNavLink } from './BurgerMenu.styled';

const BurgerMenu = ({ onToggleModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };


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
        <StyledNavLink to="/diary" onClick={() =>{onToggleModal()}}>Дневник</StyledNavLink>
        <StyledNavLink to="/calculator" onClick={onToggleModal}>Калькулятор</StyledNavLink>

        </ul>
      </Main>
    </Backdrop>
  );
};

export default BurgerMenu;
