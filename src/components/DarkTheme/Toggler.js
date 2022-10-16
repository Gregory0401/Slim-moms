import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;  
`
const ThemeNameLight = styled.span`
font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.17;
  color: ${({ theme }) => theme.toggle};
  pointer-events: none;
  @include transition;
`
const ThemeNameDark = styled.span`
font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.17;
  color: ${({ theme }) => theme.toggle};
  pointer-events: none;
  @include transition;
`
const Input = styled.input`
opacity: 0;
  position: absolute;
  :checked + Label.Ball {
    transform: translateX(20px);
    background-color: black;
  }
  :checked + Label {
    background-color: var(--orange-color);
    border: 1px solid black;
  }
`
const Label = styled.label`
background-color: #fff;
  border: 1px solid var(--orange-color);
  display: flex;
  height: 20px;
  width: 40px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  @include transition;
`
const Ball = styled.span`
position: absolute;
  height: 16px;
  width: 16px;
  background-color: var(--orange-color);
  top: 1px;
  left: 1px;
  border-radius: 50%;
  @include transition;
`


const Toggle = ({  toggleTheme }) => {
  
  return (

        <ThemeWrapper>
        <ThemeNameLight>Light</ThemeNameLight>
        <Input type="checkbox"  id="checkbox" onClick={toggleTheme}></Input>
        <Label for="checkbox">
          <Ball></Ball>
        </Label>
        <ThemeNameDark>Dark</ThemeNameDark>
        </ThemeWrapper>

  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
