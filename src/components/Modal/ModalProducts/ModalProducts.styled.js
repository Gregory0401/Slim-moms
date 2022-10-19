import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Backdrop = styled.div`
  @media screen and (min-width: 320px) {
    overflow: auto;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9000;
  }
`;

export const Modal = styled.div`
  background-color: #ffffff;
  max-height: 573px;
  overflow-y: auto;
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 40px 20px 80px 20px;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: 1001;
  }
  @media screen and (min-width: 768px) {
    width: 672px;
    padding: 64px 81px 64px 81px;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Header = styled.h1`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.text};
  text-align: center;
  @media screen and (min-width: 320px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Сalories = styled.div`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.text};
  text-align: center;
  @media screen and (min-width: 320px) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;
export const Cal = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const Line = styled.div`
  border: 1px ${p => p.theme.colors.border};
  height: 0;
  @media screen and (min-width: 320px) {
    margin-bottom: ${p => p.theme.space[5]}px;
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    border: 1px ${p => p.theme.colors.border};
    width: 330px;
    height: 0;
    margin-bottom: ${p => p.theme.space[3] + 4}px;
    margin-left: 90px;
  }
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  @media screen and (min-width: 320px) {
    margin-bottom: ${p => p.theme.space[4] + 4}px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[4] + 4}px;
    margin-left: 90px;
    margin-right: 90px;
  }
`;

export const Products = styled.ol`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  overflow-y: auto;
  @media screen and (min-width: 320px) {
    margin-bottom: ${p => p.theme.space[5] + 8}px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 90px;
    margin-bottom: ${p => p.theme.space[5] + 8}px;
  }
`;
export const ButtonMain = styled.div`
  @media screen and (min-width: 320px) {
    margin-left: 49px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 164px;
  }
`;
export const BtnClose = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 181px;
  height: 44px;
  border: 2px solid ${p => p.theme.colors.orange};
  text-decoration: none;

  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-family: ${p => p.theme.fonts.main};
  border-radius: 30px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.white};
`;
