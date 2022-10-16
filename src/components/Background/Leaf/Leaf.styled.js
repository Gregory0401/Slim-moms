// import { breakpoints } from '../../../Utils/size';
import styled, { keyframes } from 'styled-components';

// import leaf1 from '../../../img/leaf-1.png';
// import leaf2 from '../../../img/leaf-2.png';
import leaf3 from '../../../img/leaf-3.png';
// import leaf4 from '../../../img/leaf-4.png';
import leaf5 from '../../../img/leaf-1.png';
import leaf6 from '../../../img/leaf-1.png';

const animation = keyframes`
0%{
offset-distance: 0;
opacity: 0;
}

10%{
    opacity: 1;
}


100%{

offset-distance: 100%;
}
`;

export const Set = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    z-index: -1;
  }
  @media screen and (min-width: 1280px) {
  }
  display: none;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: calc(100% + 170px);
    position: absolute;
    right: 0;
    bottom: -170px;
  }
  @media screen and (min-width: 1280px) {
    top: 0;
    z-index: -1;
    height: 100%;
    height: calc(100% + 500px);
    height: 100%;
    bottom: auto;
  }
  @media screen and (min-width: 1280px) and (max-height: 850px) {
    height: calc(100% + 500px);
  }
`;

export const Img1 = styled.div`
  background: url(${leaf6}) no-repeat;
  width: 35px;
  height: 45px;
  offset-path: path('M50,0 C90,200 50,200 600,0');
  offset-rotate: 248deg;
  animation: ${animation} 65s infinite alternate ease-in-out;
`;

export const Img2 = styled.div`
  background: url(${leaf6}) no-repeat;
  width: 35px;
  height: 45px;

  top: 350px;
  left: 90vw;
  offset-path: path('M1510,0 C900,120 50,100 200,0');
  offset-rotate: 0deg;
  animation: ${animation} 95s infinite alternate ease-in-out;
`;

export const Img3 = styled.div`
  background: url(${leaf3}) no-repeat;
  width: 40px;
  height: 55px;

  offset-path: path('M350,0 C800,1560 660,960 700,0');
  offset-rotate: 10deg;
  animation: ${animation} 105s infinite alternate ease-in-out;
`;

export const Img4 = styled.div`
  background: url(${leaf3}) no-repeat;
  width: 55px;
  height: 40px;
  top: 650px;
  right: 30vw;
  offset-path: path('M850,0 C700,600 960,160 300,0');
  offset-rotate: 248deg;
  animation: ${animation} 90s infinite alternate ease-in-out;
`;

export const Img5 = styled.div`
  background: url(${leaf5}) no-repeat;
  top: 535px;
  right: 88vw;
  width: 55px;
  height: 40px;

  offset-path: path('M1800,0 C1790,1120 50,1100 1200,0');
  offset-rotate: 0deg;
  animation: ${animation} 75s infinite alternate ease-in-out;
`;

export const Img6 = styled.div`
  background: url(${leaf6}) no-repeat;
  width: 30px;
  height: 40px;
  z-index: 22;

  top: 350px;
  left: 90vw;
  offset-path: path('M2000,1700 C1300,1220 500,0 1200,0');
  offset-rotate: 248deg;
  animation: ${animation} 100s infinite alternate ease-in-out;
`;
