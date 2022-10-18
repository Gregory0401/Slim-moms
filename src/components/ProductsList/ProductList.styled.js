import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.main};
  line-height: ${p => p.theme.lineHeights.text};
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4] + 16}px;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  width: 240px;
`;

export const TextDiscription = styled.p`
  font-size: ${p => p.theme.fontWeights.s};
  font-family: ${p => p.theme.fonts.main};
  line-height: ${p => p.theme.lineHeights.text};
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4] + 4}px;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  width: 107px;
  text-align: right;
  margin-right: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4] - 4}px;
  height: 271px;
  padding-right: ${p => p.theme.space[5] + 8}px;
  overflow: auto;
`;

export const Item = styled.li`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;
