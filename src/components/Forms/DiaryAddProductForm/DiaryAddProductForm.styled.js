import styled from 'styled-components';

export const StyledForm = styled.form`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

`;

export const StyledLabel = styled.label`
  position: flex;
`;

export const StyledInput = styled.input`
  display: flex;
  font: inherit;
  font-size: 0.8em;
  outline: none;
  padding: 10px 10px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Wrrapen = styled.div`
  position: relative;
`;

export const LabelSearch = styled.label``;

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
