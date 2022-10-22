import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-beetween;
  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const StyledTitle = styled.p`
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.primary_text_color};
`;

export const StyledSecondaryTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  text-align: right;

  color: ${p => p.theme.colors.primary_text_color};
`;
