import styled from 'styled-components';
import { breakpoints } from '../../../Utils/size';
import { NavLink } from 'react-router-dom';

export const Backdrop = styled.div`
  @media screen and (max-width: 1279px) {
    @media ${breakpoints.mobile} {
      height: 100vh;
      width: 100vw;
      margin: 0 auto;
    }
    /* background-color: rgba(38, 64, 97, 1); */
    background-color: ${({ theme }) => theme.burger};
    z-index: 100;
  }
`;
export const Main = styled.div`
  @media screen and (min-width: 320px) {
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  height: 32px;
  margin-bottom: 20px;
  color: rgba(155, 159, 170, 1);

  text-decoration: none;
  &.active {
    color: rgba(255, 255, 255, 1);
  }
`;
