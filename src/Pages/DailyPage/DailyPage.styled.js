import styled from 'styled-components';

import { breakpoints } from '../../Utils/size';

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
    background-color: var(--secondary-background-color);
  }
`;
