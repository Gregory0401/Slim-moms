import styled from '@emotion/styled';

export const StyledImage = styled.img`
  position: relative;
  z-index: 3;
  min-width: 0;
  height: 125px;
  width: 125px;
  border-radius: 50%;
  object-fit: cover;
  margin: 5px auto;
  overflow: hidden;
`;

export const TeamItem = styled.li`
  border-radius: 12px;
  width: 200px;
  height: 200px;
  position: relative;
  padding: 10px;
  perspective: 600px;
  text-align: center;
  background-color: #ffffff;
`;

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


  export const IconWrapper = styled.div`
  position:absolute;
  left:0;
  right:0;
  `

  export const TeamTitle = styled.div `
font-size:0.9rem;
font-family: inherit;
  `