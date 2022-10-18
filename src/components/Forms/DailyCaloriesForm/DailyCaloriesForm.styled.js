import styled from 'styled-components';
import { Field } from 'formik';

import { breakpoints } from 'Utils/size';

export const StyledForm = styled.div`
  font-family: ${p => p.theme.fonts.main};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  @media ${breakpoints.maxMobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${breakpoints.maxMobile} {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
  @media ${breakpoints.minTablet} {
    gap: 40px;
    margin-bottom: ${p => p.theme.space[5] + 8}px;
  }
`;
export const FormWrapper = styled.div`
  margin-bottom: ${p => p.theme.space[5] + 8}px;

  @media ${breakpoints.minTablet} {
    display: flex;
    gap: 32px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const ErrorText = styled.p`
  position: absolute;
  color: ${p => p.theme.colors.orange};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Label = styled.label`
  display: block;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondaryTextColor};
`;

export const Input = styled(Field)`
  display: block;
  width: 240px;
  height: 20px;
  outline: none;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: #212529;
  background-color: transparent;
  background-clip: padding-box;
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const Button = styled.button`
  background: ${p => p.theme.colors.orange};
  border: 2px ${p => p.theme.colors.orange};
  border-radius: 30px;
  padding: 12px 49px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};

  color: #fff;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  cursor: pointer;

  @media ${breakpoints.desktop} {
    margin-left: 339px;
  }
`;

export const RadioTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondaryTextColor};
  &::after {
    margin-top: ${p => p.theme.space[4] + 4}px;
    margin-top: ${p => p.theme.space[4] + 4}px;
    content: '';
    display: block;
    height: 1px;
    width: 240px;
    background-color: ${p => p.theme.colors.border};
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const RadioInput = styled(Field)`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid ${p => p.theme.colors.border};
  transition: 0.3s all linear;

  color: ${p => p.theme.colors.secondaryTextColor};

  &:checked {
    border: 10px solid ${p => p.theme.colors.orange};
  }
  :hover {
    cursor: pointer;
  }
`;

export const RadioLabel = styled.label`
  color: ${p => p.theme.colors.secondaryTextColor};
  display: flex;
  gap: 4px;

  ${RadioInput}:checked & {
    color: ${p => p.theme.colors.orange};
  }
`;
