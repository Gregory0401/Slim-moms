import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'Utils/size';
export const Wrapper = styled.nav`
  display: flex;
  @media ${breakpoints.onlyTablet} {
    margin-left: auto;
  }
  @media ${breakpoints.desktop} {
    border-left: 2px solid var(--border-color);
  }
  
  
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'GothamPro';
  padding-left: 20px;
  height: 32px;

  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: var(--secondary-text-color);
  &.active {
    color: var(--primary-text-color);
  }
`;
