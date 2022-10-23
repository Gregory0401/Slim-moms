import styled from 'styled-components';
import { breakpoints } from 'Utils/size';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThemeWrapper = styled.div`
  @media ${breakpoints.mobile} {
    display: flex;
    position: absolute;
    top: 75px;
    right: -10px;
    z-index: 25;
  }

  @media ${breakpoints.onlyTablet} {
    position: absolute;
    top: 75px;
    right: 5px;
    z-index: 25;
  }

  @media ${breakpoints.desktop} {
    position: absolute;
    top: 15px;
    right: 5px;
    z-index: 25;
  }
`;
