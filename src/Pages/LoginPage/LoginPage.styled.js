import styled from 'styled-components';
import { breakpoints } from 'Utils/size';
export const Wrapper = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: 'center';
  justify-content: 'center';
  padding-top: 40px;
  padding-bottom: 99px;
  @media ${breakpoints.minTablet} {
    padding-top: 160px;
    padding-bottom: 419px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 163px;
    padding-bottom: 179px;
  }
`;
export const Title = styled.h2`
  font-weight: 700;
  font-family: 'Gotham Pro';
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;
  margin-bottom: 60px;
  @media ${breakpoints.maxMobile} {
    text-align: center;
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
