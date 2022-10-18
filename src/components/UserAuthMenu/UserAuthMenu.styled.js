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
  margin-right: 45px;

  @media ${breakpoints.maxMobile} {
    ${ContainerStyled};
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
    padding: 0;
  }
  @media ${breakpoints.desktop} {
    /* padding: 0 16px; */
    margin-right: 0;
  }
`;
export const Name = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 0.93;
  text-align: right;
  letter-spacing: ${p => p.theme.letterSpacing.l};

  color: var(--primary-text-color);
`;
export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  border: none;
  border-left: 2px solid ${p => p.theme.colors.border};
  background-color: transparent;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: ${p => p.theme.lineHeights.nav};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  padding-left: ${p => p.theme.space[4] + 4}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  height: 32px;
  color: ${p => p.theme.colors.secondaryTextColor};
`;
export const Burger = styled.div``;
