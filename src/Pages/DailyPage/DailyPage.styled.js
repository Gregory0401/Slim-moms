import styled from 'styled-components';

import { breakpoints } from '../../Utils/size';

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.mobile} {
  }

  @media ${breakpoints.minTablet} {
  }
  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const SidebarWrap = styled.div`
  @media ${breakpoints.desktop} {
    height: 100%;
    background-color: ${({ theme }) => theme.rightBar};
  }
`;

export const Wrapper = styled.div`
  margin-top: 60px;
`;

export const Div = styled.div`
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
