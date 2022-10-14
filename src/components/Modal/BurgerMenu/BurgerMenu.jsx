import React from 'react';
import { Backdrop, Main, StyledNavLink } from './BurgerMenu.styled';

const BurgerMenu = ({ onToggleModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Main>
        <ul>
          <li>
            <StyledNavLink to="/diary" onClick={onToggleModal} end>
              Дневник
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/calculator" onClick={onToggleModal} end>
              Калькулятор
            </StyledNavLink>
          </li>
        </ul>
      </Main>
    </Backdrop>
  );
};

export default BurgerMenu;
