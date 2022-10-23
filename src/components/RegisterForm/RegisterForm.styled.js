import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'Utils/size';
import { Field } from 'formik';
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${breakpoints.mobile} {
    padding: 0 20px;
  }

  @media ${breakpoints.minTablet} {
    padding: 0 32px;
  }
  @media ${breakpoints.desktop} {
    padding: 0 16px;
  }
  @media ${breakpoints.maxMobile} {
    align-items: center;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${p => p.theme.fonts.main};

  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 17px;
  letter-spacing: ${p => p.theme.letterSpacing.l};

  color: ${p => p.theme.colors.border};
`;

export const Input = styled(Field)`
  display: block;
  width: 280px;
  height: 20px;
  outline: none;

  font-family: inherit;
  font-size: 1rem;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  @media ${breakpoints.minTablet} {
    flex-direction: row;
    gap: 32px;
  }
`;

export const BtnR = styled.button`
  width: 181px;
  height: 44px;
  border: 2px ${p => p.theme.colors.orange};
  text-decoration: none;

  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: ${p => p.theme.fonts.main};
  color: #fff;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
`;
export const StyledNavLink = styled(NavLink)`
  background: #fff;
  border: 2px solid ${p => p.theme.colors.orange};
  border-radius: 30px;
  width: 182px;
  height: 44px;

  font-family: ${p => p.theme.fonts.main};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  justify-content: center;

  color: ${p => p.theme.colors.orange};
`;
export const ErrorText = styled.p`
  position: absolute;
  color: ${p => p.theme.colors.orange};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-top: ${p => p.theme.space[4] + 4}px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
