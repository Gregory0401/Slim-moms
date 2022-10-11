import styled from 'styled-components';

export const Backdrop = styled.div`
@media screen and (max-width: 1279px){
    position: absolute;
  left: 0;
  top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(38, 64, 97, 1);
    z-index:100;
}
`
export const Main = styled.div`
@media screen and(min-width: 320px){
padding-top: 60px;
padding-left: 20px;
padding-right: 20px;
}
@media screen and (min-width: 768px){
padding-top: 100px;
padding-left: 216px;
padding-right: 216px;
}
`
export const Link = styled.li`
font-family: 'Verdana';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 1.2;
text-align: center;
text-transform: uppercase;
color: rgba(255, 255, 255, 1);
margin-bottom: 30px;
`
