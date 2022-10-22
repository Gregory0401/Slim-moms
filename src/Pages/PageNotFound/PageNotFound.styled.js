import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../Utils/size';
import notFound from 'img/not-found.jpg';

export const StyledImage = styled.div`
  background-image: url(${notFound});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  display: flex;
  top: 50px;
  align-items: center;
  color: #fc842d;
  font-size: 25px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #7ddec1;
  }

  @media ${breakpoints.minTablet} {
    display: flex;
    font-size: 35px;
  }
`;
