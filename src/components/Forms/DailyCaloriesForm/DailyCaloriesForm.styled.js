import styled from 'styled-components';
import { Field } from 'formik';

import { breakpoints } from 'Utils/size';

export const StyledForm = styled.div`
  font-family: Verdana;
  line-height: 1.21;
  letter-spacing: 0.04em;
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
    margin-bottom: 32px;
  }
  @media ${breakpoints.minTablet} {
    gap: 40px;
    margin-bottom: 40px;
  }
`;
export const FormWrapper = styled.div`
  margin-bottom: 40px;

  @media ${breakpoints.minTablet} {
    display: flex;
    gap: 32px;
    margin-bottom: 60px;
  }
`;
export const ErrorText = styled.p`
  position: absolute;
  color: var(--orange-color);
  font-size: 12px;
`;

export const Label = styled.label`
  /* width: 240px; */
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: var(--secondary-text-color);
`;

export const Input = styled(Field)`
  display: block;
  width: 240px;
  height: 20px;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  background-clip: padding-box;
  border-bottom: 1px solid var(--border-color);
`;

export const Button = styled.button`
  background: var(--orange-bgc);
  border: 2px solid var(--orange-color);
  border-radius: 30px;
  padding: 12px 49px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: var(--white);
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  cursor: pointer;
  /* margin-bottom: 77px; */

  @media ${breakpoints.desktop} {
    margin-left: 339px;
  }
`;

export const RadioTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: var(--secondary-text-color);
  &::after {
    margin-top: 20px;
    margin-bottom: 20px;
    content: '';
    display: block;
    height: 1px;
    width: 240px;
    background-color: var(--border-color);
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
`;

export const RadioInput = styled(Field)`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid var(--secondary-text-color);
  transition: 0.3s all linear;

  color: var(--secondary-text-color);

  &:checked {
    border: 10px solid var(--orange-color);
  }
  :hover {
    cursor: pointer;
  }
`;

export const RadioLabel = styled.label`
  color: var(--secondary-text-color);
  display: flex;
  gap: 4px;

  ${RadioInput}:checked & {
    color: var(--orange-color);
  }
`;
