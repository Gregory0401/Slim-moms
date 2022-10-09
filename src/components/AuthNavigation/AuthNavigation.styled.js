import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  border-left: 2px solid #e0e0e0;
  margin-left: 20px;
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
