import styled from 'styled-components';

export const MobileForm = styled.div``



export const Modal = styled.div`
width: 100vw;
height: 100vh;
background-color: ${({ theme }) => theme.body};
position: absolute;
top: 114px;
left: 0;
`
export const BtnClose = styled.div`
position: absolute;
top: -32px;
left: 10px;
z-index: 100;
`