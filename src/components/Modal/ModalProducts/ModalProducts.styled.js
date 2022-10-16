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
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: 320px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Сalories = styled.div`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: 320px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Cal = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
`;

export const Line = styled.div`
  border: 1px solid #e0e0e0;
  height: 0;
  @media screen and (min-width: 320px) {
    margin-bottom: 32px;
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    border: 1px solid #e0e0e0;
    width: 330px;
    height: 0;
    margin-bottom: 12px;
    margin-left: 90px;
  }
`;
export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  @media screen and (min-width: 320px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    margin-left: 90px;
    margin-right: 90px;
  }
`;

export const Products = styled.ol`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  overflow-y: auto;
  @media screen and (min-width: 320px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 90px;
    margin-bottom: 40px;
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
  border: 2px solid var(--orange-color);
  text-decoration: none;

  background: var(--orange-bgc);
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: 'Verdana';

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: var(--white);
`;
