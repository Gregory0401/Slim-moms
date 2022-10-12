import styled from 'styled-components';
import { breakpoints } from 'Utils/size';

export const Wrapper = styled.div`
  @media ${breakpoints.maxMobile} {
    padding-bottom: 77px;
  }

  @media ${breakpoints.mobile} {
    padding: 0 20px;
  }

  @media ${breakpoints.minTablet} {
    padding: 0 32px;
    padding-bottom: 111px;
  }
  @media ${breakpoints.desktop} {
    padding: 0 16px;
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