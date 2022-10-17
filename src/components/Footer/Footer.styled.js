import styled from 'styled-components';
import { breakpoints } from 'Utils/size';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  font-size: 0.8rem;
  color: #212121;
  align-content: flex-end;
  margin-top: 350px;
  @media ${breakpoints.minTablet} {
    margin-top: 350px;
    padding: 0 32px;
  }
  @media ${breakpoints.desktop} {
    margin-top: 250px;
  }
`;

export const StyledButton = styled.button`
  padding: 6px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.3);
  margin-left: 10px;
`;
