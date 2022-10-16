import styled from "@emotion/styled";

export const StyledBackdrop =styled.div `
  position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
`
export const TeamContainer = styled.div `
  display: grid;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 15px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;`

export const ModalTeam = styled.div`
  padding: 40px;
  background-color: #e2eff97d;
  box-shadow: 1px 1px 15px 5px rebeccapurple;
  border-radius: 8px;
  /* transition: transform var(--transition); */
  width:50vw    ;
  height:50vw;
  position:absolute;
  top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);`
