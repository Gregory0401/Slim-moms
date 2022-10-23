import styled from 'styled-components';
// import tab from 'img/WrapTab.png';
import desk from 'img/WrapDesk.png';

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
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 40%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${p => p.theme.colors.secondaryBackground};
  z-index: -1;
  @media ${breakpoints.desktop} {
    background-image: url(${desk});
    width: 40%;
    height: 100%;
    background-position: bottom 00px right 0;
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
