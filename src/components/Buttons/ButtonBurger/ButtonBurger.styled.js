import styled from 'styled-components'
import bgimg from '../../../img/burger-menu.png'

export const Button = styled.button`
width: 18px;
height: 12px;
background-image: url(${bgimg});
cursor: pointer;
border: none;
@media screen and (min-width: 1280px) {
    display: none;
}
`