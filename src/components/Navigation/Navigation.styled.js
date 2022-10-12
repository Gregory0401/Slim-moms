import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../Utils/size';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'GothamPro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  height: 32px;

  color: var(--secondary-text-color);

  text-decoration: none;
  &.active {
    color: var(--primary-text-color);
  }
`;
export const StyledLogo = styled(NavLink)`
  text-decoration: none;
`;

export const Menu = styled.div`
  display:none;
  
  @media ${breakpoints.desktop}{
  
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid var(--border-color);
  padding-left: 20px;
  gap: 16px;}
`;

export const Burger = styled.div`
@media ${breakpoints.desktop} {
  
}
`

export const Wrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 20px;
    
  
`;
