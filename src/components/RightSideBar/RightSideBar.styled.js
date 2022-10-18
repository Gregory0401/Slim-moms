import styled from 'styled-components';

import { breakpoints } from '../../Utils/size';
import bgDesk from '../../img/leaves-side-desktop.png';
import bgTablet from '../../img/leaves-side-tablet.png';
// import { ContainerStyled } from '../Layout/Main/Main.styled';

export const RightBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: ${p => p.theme.space[5] + 8}px;
  padding-bottom: ${p => p.theme.space[4] + 8}px;
  background: ${p => p.theme.colors.secondaryBackground};
  @media ${breakpoints.minTablet} {
    flex-direction: row;
    justify-content: center;
    /* justify-content: space-between;
    align-items: flex-start; */
    gap: 80px;
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: bottom right;
  }
  @media ${breakpoints.desktop} {
    position: relative;
    top: -150px;
    min-width: 520px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 60px;
    padding: 280px 95px 92px 95px;
    height: calc(100vh - 150px);
    background-image: url(${bgDesk});
  }
`;
export const ProdThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* max-width: 280px; */
  @media ${breakpoints.minTablet} {
    gap: 60px;
    flex-direction: row;
    justify-content: center;
    /* width: 100%; */
  }
  @media ${breakpoints.desktop} {
    flex-direction: column;
    max-width: 280px;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const List = styled.ul`
  color: ${p => p.theme.colors.secondaryTextColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;

  color: ${p => p.theme.colors.secondaryTextColor};
`;
