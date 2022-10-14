import styled from 'styled-components';
import { breakpoints } from 'Utils/size';

export const Wrapper = styled.div`
  @media ${breakpoints.maxMobile} {
    padding-bottom: 77px;
  }

  @media ${breakpoints.mobile} {
    padding: 0 20px;
    padding-bottom: 47px;
  }

  @media ${breakpoints.minTablet} {
    padding-bottom: 48px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media ${breakpoints.desktop} {
    padding-bottom: 111px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.44;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: Verdana;
  font-weight: 700;
  @media ${breakpoints.maxMobile} {
    text-align: center;
  }
  @media ${breakpoints.minTablet} {
    width: 704px;
    font-size: 34px;
    line-height: 1.2;
    margin-top: 100px;
    margin-bottom: 68px;
  }
  @media ${breakpoints.desktop} {
    width: 608px;
    margin-top: 150px;
  }

  color: var(--primary-text-color);
`;
