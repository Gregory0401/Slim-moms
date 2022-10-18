import { useState } from 'react';
import { StyledDiv, StyledButton } from './Footer.styled';
import FooterModal from './FooterModal';

const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <StyledDiv>
        <p>©2022 Slim MoM | ALL RIGHTS RESERVED |</p>
        <StyledButton onClick={() => setShow(true)}>
          Proudly created by GoIT Group #2
        </StyledButton>
      </StyledDiv>
      <FooterModal show={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Footer;
