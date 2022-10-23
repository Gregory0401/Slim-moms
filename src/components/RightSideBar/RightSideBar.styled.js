import styled from 'styled-components';

import { breakpoints } from '../../Utils/size';
// import bgDesk from '../../img/leaves-side-desktop.png';
// import bgTablet from '../../img/leaves-side-tablet.png';
// import { ContainerStyled } from '../Layout/Main/Main.styled';

export const RightBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
    justify-content: center;
    /* justify-content: space-between;
    align-items: flex-start; */
    gap: 80px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media ${breakpoints.desktop} {
    min-width: 520px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 60px;
    padding: 280px 95px 92px 95px;
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
  color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;

  color: ${p => p.theme.colors.secondaryToWhite};
  transition: all ${props => props.theme.transitionTime};
`;
