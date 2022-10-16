import styled from 'styled-components';
import { ContainerStyled } from '../Layout/Main/Main.styled';
import { breakpoints } from '../../Utils/size';

export const Menu = styled.div`
  position: absolute;
  width: 40vw;
  height: 30vh;
  transition: 1000ms;
  @media screen and (min-width: 320px) {
    top: 114px;
    left: 0px;
  }
  @media screen and (min-width: 768px) {
    top: 80px;
    left: 0px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 30px; */
  min-height: 80px;

  @media ${breakpoints.maxMobile} {
    flex-direction: column;
  }

  @media ${breakpoints.desktop} {
    border-bottom: none;
    align-items: flex-end;
    justify-content: flex-start;
    min-height: 150px;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  ${ContainerStyled};
  @media ${breakpoints.maxMobile} {
    border-bottom: 2px solid var(--border-color);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 30px; */
  min-height: 80px;
  width: 100%;

  @media ${breakpoints.desktop} {
    align-items: flex-end;
    justify-content: flex-start;
    min-height: 150px;
    max-width: 100%;
  }
`;
export const SecondWrapper = styled.div`
  /* ${ContainerStyled}; */
  @media ${breakpoints.mobile} {
  border-bottom: 2px solid var(--border-color);}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  min-height: 80px;
  width: 100%;

  @media ${breakpoints.onlyTablet} {
    border-bottom: 2px solid var(--border-color);
  }

  @media ${breakpoints.desktop} {
    align-items: baseline;
    justify-content: flex-start;
    min-height: 150px;
    max-width: 100%;
    padding-top: 70px;
  }
`;

export const WrapperBurger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
`;
