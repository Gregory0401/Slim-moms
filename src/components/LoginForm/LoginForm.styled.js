import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'Utils/size';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Verdana';
  

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;

export const Input = styled.input`
  display: block;
  width: 240px;
  height: 20px;

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  @media ${breakpoints.minTablet}{
    flex-direction: row;
    gap: 32px;
  }
  
`;

export const BtnL = styled.button`
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
export const StyledNavLink = styled(NavLink)`
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
