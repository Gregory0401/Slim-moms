import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../Utils/size';
export const Wrapper = styled.nav`
  display: flex;
 
  
  @media ${breakpoints.desktop}{
     border-left: 2px solid #e0e0e0;


  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Gotham Pro';
  padding-left: 20px;

  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #9b9faa;
  &.active {
    color: #212121;
  }
`;
