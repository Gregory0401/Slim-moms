import { breakpoints } from '../../Utils/size';
import styled from 'styled-components';
// import straw from '../../img/strawberry-desktop.png';
// import ban from '../../img/banana-tablet.png';
// import leaves from '../../img/leaves-tablet.png';
// import vector from '../../img/vector-tablet.png';
// import frame from '../../img/desktop.png';
// import vector_d from '../../img/vector-desktop.png';

import WrapTab from '../../img/WrapTab.png';
import WrapDesk from '../../img/WrapDesk.png';

// export const BackgroundStyled = styled.div`
//   /* padding-bottom: 80px; */

//   position: relative;
//   flex-grow: 2;
//   width: 100%;
//   height: 100%;
//   @media ${breakpoints.minTablet} {
//     height: 100vh;
//     background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});
//     background-repeat: no-repeat;
//     background-position: right 0px bottom 0px, right -50px bottom 279px,
//       right 12px bottom 279px;
//   }
//   @media ${breakpoints.desktop} {
//     height: 100vh;
//     background-image: url(${frame}), url(${vector_d});
//     background-position: bottom 0px right, bottom right;
//     background-repeat: no-repeat;
//   }
// `;

export const BackgroundStyled = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;

  @media ${breakpoints.onlyTablet} {
    background-image: url(${WrapTab});
    background-position: top 0 right 0;
  }

  @media ${breakpoints.desktop} {
    background-image: url(${WrapDesk});
    background-position: top 0 right 0;
  }
`;
