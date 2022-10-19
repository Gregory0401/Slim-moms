import styled from 'styled-components';
import { breakpoints } from 'Utils/size';

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: 20px 20px 16px;
  align-items: center;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.primary_text_color};

  position: absolute;
  bottom: 10px;
  @media ${breakpoints.minTablet} {
    padding: 20px 32px 16px;
    flex-direction: row;
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
