import styled from 'styled-components';
import cimg from '../../../img/close-modal.png';

export const Button = styled.button`
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0);
  background-image: url(${cimg});
  cursor: pointer;
  border: none;
  margin-bottom: 26px;
`;
