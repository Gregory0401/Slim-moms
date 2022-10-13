import styled from 'styled-components';
import bgimg from '../../../img/Vector.png';
import { breakpoints } from '../../../Utils/size';

export const Button = styled.button`
  @media ${breakpoints.mobile} {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fc842d;
    border: none;
    background-image: url(${bgimg});
    background-size: 14px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  @media ${breakpoints.minTablet} {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fc842d;
    border: none;
    background-image: url(${bgimg});
    background-size: 14px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
`;
