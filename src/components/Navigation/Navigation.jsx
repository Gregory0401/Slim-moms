import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/Auth/authSelectors';
import { Menu, StyledNavLink, Wrapper } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      {<NavLink to="/">Logo</NavLink>}
      {isLoggedIn && (
        <Menu>
          <StyledNavLink to="/daily">Дневник</StyledNavLink>
          <StyledNavLink to="/calculator">Калькулятор</StyledNavLink>
        </Menu>
      )}
    </Wrapper>
  );
};
