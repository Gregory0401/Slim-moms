import styled from 'styled-components';
import { ContainerStyled } from '../Layout/Main/Main.styled';
import { breakpoints } from '../../Utils/size';

export const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* margin-left: auto; */
  margin-right: 60px;
  ${ContainerStyled};
  @media ${breakpoints.maxMobile} {
    background-color: var(--secondary-background-color);
    width: 100%;
    height: 40px;
    justify-content: flex-end;
    /* border-top: 2px solid var(--border-color); */
  }

  @media ${breakpoints.mobile} {
    padding: 0 20px;
  }

  @media ${breakpoints.minTablet} {
    padding: 0 32px;
  }
  @media ${breakpoints.desktop} {
    padding: 0 16px;
  }
`;
export const Name = styled.p`
  font-family: 'GothamPro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  text-align: right;
  letter-spacing: 0.04em;

  color: var(--primary-text-color);
`;
export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'GothamPro';
  border: none;
  border-left: 2px solid var(--border-color);
  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  padding-left: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 32px;
  color: var(--secondary-text-color);
`;
export const Burger = styled.div``;
