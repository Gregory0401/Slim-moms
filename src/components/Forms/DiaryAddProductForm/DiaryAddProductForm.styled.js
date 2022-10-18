import styled from 'styled-components';
import { breakpoints } from '../../../Utils/size';

export const MobileForm = styled.div``;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;
export const StyledForm = styled.form`
  /* @media ${breakpoints.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${breakpoints.minTablet} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  } */
  @media screen and (min-width: 320px) {
    display: block;
    width: 255px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

export const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledLabel = styled.label`
  position: flex;
`;

export const StyledInput = styled.input`
  @media ${breakpoints.minTablet} {
    display: inline;
    display: flex;

    font: inherit;
    font-size: 0.8em;
    outline: none;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid #e0e0e0;

    &:not(:last-child) {
      margin-right: ${p => p.theme.space[4] + 4}px;
    }
  }
`;

export const StyledInput2 = styled.input`
  @media ${breakpoints.minTablet} {
    display: inline;
    display: flex;

    font: inherit;
    font-size: 0.8em;
    outline: none;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${p => p.theme.colors.border};

    &:not(:last-child) {
      margin-right: ${p => p.theme.space[4] + 4}px;
    }
  }
`;

export const Wrrapen = styled.div`
  @media ${breakpoints.minTablet} {
    display: inline;
    position: relative;
  }
`;

export const LabelSearch = styled.label`
  display: block;
  width: 240px;
  margin-right: ${p => p.theme.space[5] + 16}px;
  position: relative;

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const WrrapenSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 1;
  left: 0;
  width: 100%;
  height: 150px;
  overflow: auto;
  cursor: pointer;
`;

export const Text = styled.p``;

export const Button = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ButtonModal = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ButtonMod = styled.button`
  width: 182px;
  height: 44px;
  background-color: red;
  border-radius: 50%;
  background: ${p => p.theme.colors.orange};
  border: 2px solid ${p => p.theme.colors.orange};
  color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  cursor: pointer;
  margin-top: 60px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
export const ButtonClose = styled.button`
  @media screen and (min-width: 320px) {
    position: absolute;
    top: -30px;
    left: 10px;
    color: rgba(200, 0, 0);
    z-index: 100;
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const ErrorWeight = styled.div`
  position: absolute;
  color: ${p => p.theme.colors.orange};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const WrrapenInput = styled.div`
  position: relative;
`;
