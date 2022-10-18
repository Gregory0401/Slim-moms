// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/Auth/authSelectors';
import { Menu, StyledNavLink, Wrapper} from './Navigation.styled';
import { Logo } from '../Logo/Logo';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
  
    <Wrapper>
      {<Logo />}
      {isLoggedIn && (
        <Menu>
          <StyledNavLink to="/diary">Дневник</StyledNavLink>
          <StyledNavLink to="/calculator">Калькулятор</StyledNavLink>
        </Menu>
        
        
      )} 
    </Wrapper>

    
  
  );
};
