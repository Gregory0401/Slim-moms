import styled from 'styled-components';
import { breakpoints } from '../../Utils/size';

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  @media ${breakpoints.desktop} {
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  display: none;
  @media ${breakpoints.minTablet} {
    display: inline;
    width: 44px;
    height: 44px;
  }
  @media ${breakpoints.desktop} {
    width: 70px;
    height: 66px;
  }
`;

export const Text = styled.img`
  display: none;
  /* width: 106px; */
  /* height: 16px; */
  @media ${breakpoints.minTablet} {
    margin-left: 10px;
    display: inline;
    /* width: 107px; */
    /* height: 16px; */
  }
  @media ${breakpoints.desktop} {
    margin-left: 2px;
  }
`;
