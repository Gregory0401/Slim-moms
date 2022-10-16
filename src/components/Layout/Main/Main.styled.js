import styled from 'styled-components';
import { breakpoints } from '../../../Utils/size';
import { css } from 'styled-components';

export const ContainerStyled = css`
  @media ${breakpoints.mobile} {
    padding: 0 20px;
    height: 100%;
    margin: 0 auto;

  }

  @media ${breakpoints.minTablet} {
    padding: 0 32px;
  }
  @media ${breakpoints.desktop} {
    padding: 0 16px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;
