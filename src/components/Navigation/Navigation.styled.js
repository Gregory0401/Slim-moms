import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  height: 32px;

  color: #9b9faa;

  text-decoration: none;
  &.active {
    color: #212121;
  }
`;
export const StyledLogo = styled(NavLink)`
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid #e0e0e0;
  padding-left: 20px;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
