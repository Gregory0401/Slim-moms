import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  z-index: 100;
  height: 350px;
  overflow: auto;
  position: absolute;
  background-color: white;
`;

export const PopupText = styled.p`
  cursor: pointer;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #212121;

  &:hover {
    text-decoration: underline;
  }
`;
