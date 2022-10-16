import styled from 'styled-components'
import bgimg from '../../../img/BurgerSvg.svg'

export const Button = styled.button`
width: 18px;
height: 12px;
background-image: url(${bgimg});
background-color: ${({ theme }) => theme.btnBurger};
cursor: pointer;
border: none;
@media screen and (min-width: 1280px) {
    display: none;
}
`