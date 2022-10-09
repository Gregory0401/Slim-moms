import styled from 'styled-components';
// import { Button } from 'components/Buttons/BattonMainActive/BattonMainActive.styled';

// export const StyledButton = styled.btn`
//   ${Button};
//   margin-left: 339px;
// `;

export const Form = styled.form`
  font-family: Verdana;
  line-height: 1.21;
  letter-spacing: 0.04em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const FormWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 60px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
`;

export const Input = styled.input`
  display: block;
  width: 240px;
  height: 20px;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

// export const Button = styled.button`
//   background: #fc842d;
//   border: 2px solid #fc842d;
//   border-radius: 30px;
//   width: 182px;
//   height: 44px;
//   font-family: Verdana;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 1.21;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   letter-spacing: 0.04em;
//   justify-content: center;
//   color: #ffffff;
//   margin-left: 339px;
// `;

export const RadioTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
  &::after {
    margin-top: 20px;
    margin-bottom: 20px;
    content: '';
    display: block;
    height: 1px;
    width: 240px;
    background-color: #bdbdbd;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
`;

export const RadioLabel = styled.label`
  color: #9b9faa;
  display: flex;
  flex-direction: row-reverse;
  gap: 4px;

  &:checked {
    color: #fc842d;
  }
`;

export const RadioInput = styled.input`
  color: #9b9faa;

  &:checked {
    border: 6px solid #fc842d;
    color: #fc842d;
  }
`;
