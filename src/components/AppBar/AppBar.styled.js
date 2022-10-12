import styled from 'styled-components';
import { ContainerStyled } from '../Layout/Main/Main.styled';
import { breakpoints } from '../../Utils/size';

export const Header = styled.header`
  ${ContainerStyled};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  min-height: 80px;
  border-bottom: 2px solid var(--border-color);
  @media ${breakpoints.desktop} {
    border-bottom: none;
    align-items: flex-end;
    justify-content: flex-start;
    min-height: 150px;
    max-width: 100%;
  }
`;
export const Burger = styled.div`
margin-top: 80px;
margin-left: 0;
`
