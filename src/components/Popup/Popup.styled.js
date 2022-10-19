import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 240px;
  z-index: 100;
  height: 300px;
  overflow: auto;
  position: absolute;
  background-color: white;
`;

export const PopupText = styled.p`
  cursor: pointer;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-family: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.primary_text_color};

  &:hover {
    text-decoration: underline;
  }
`;
