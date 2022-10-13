import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: 150px;

  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #9b9faa;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fc842d;
  }
`;

export const DateTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  margin-right: 20px;

  color: #212121;
`;
