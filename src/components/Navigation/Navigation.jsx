import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  Menu,
  StyledNavLink,
  Wrapper
  
  
} from './Navigation.styled';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      {
        <NavLink to="/">
          Logo
        </NavLink>
      }
      {isLoggedIn && (
        <Menu>
          <StyledNavLink to="">
            Дневник
          </StyledNavLink>
          <StyledNavLink to="">
            Калькулятор
          </StyledNavLink>
        </Menu>
      )}
    </Wrapper>
  );
};
