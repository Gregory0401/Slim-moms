import styled from 'styled-components';
import { breakpoints } from 'Utils/size';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px 16px;
  align-items: center;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.primary_text_color};
  align-content: flex-end;
  margin-top: 20px;
  @media ${breakpoints.minTablet} {
    padding: 20px 32px 16px;
  }
  @media ${breakpoints.desktop} {
  }
`;

export const StyledButton = styled.button`
  padding: ${p => p.theme.space[2] + 2}px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.3);
  margin-left: ${p => p.theme.space[3] + 2}px;
  border-radius: 5px;
`;
