import styled from '@emotion/styled';
import { breakpoints } from 'Utils/size';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const TeamContainer = styled.div`
  display: grid;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 15px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ModalTeam = styled.div`
  position: relative;
  padding: 40px;
  background-color: #e2eff97d;
  border-radius: 8px;
  transition: transform var(--transition);
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  box-shadow: 1px 1px 15px 5px #fc842d;
  max-height: 1200px;
  overflow: auto;
  @media ${breakpoints.mobile} {
  }
  @media ${breakpoints.onlyTablet} {
    position: absolute;
    width: 720px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  @media ${breakpoints.desktop} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    width: 720px;
  }
`;

export const CloseFooterButton = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
