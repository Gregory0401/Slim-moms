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
  font-family: 'Verdana';

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: var(--secondary-text-color);
`;

export const Input = styled(Field)`
  display: block;
  width: 280px;
  height: 20px;
  outline: none;

  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid var(--border-color);
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

export const BtnL = styled.button`
  width: 181px;
  height: 44px;
  border: 2px solid #fc842d;
  text-decoration: none;

  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: 'Verdana';

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #ffffff;
`;
export const StyledNavLink = styled(NavLink)`
  background: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  width: 182px;
  height: 44px;

  font-family: 'Verdana';

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  justify-content: center;

  color: #fc842d;
`;
export const ErrorText = styled.p`
  position: absolute;
  color: var(--orange-color);
  font-size: 12px;
  margin-top: 40px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
