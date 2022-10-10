import React from "react";
import {Backdrop, Modal, Header, Сalories, Line, Title, Products, ButtonMain, BtnClose} from './ModalProducts.styled'
import { useEffect } from "react";
import {Button} from '../../Buttons/BattonMainActive/BattonMainActive.styled'
import {ButtonClose} from '../../Buttons/ButtonClose/ButtonClose'
import {StyledNavLink} from '../../RegisterForm/RegisterForm.styled'

const ModalProducts = (onClose) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("click", handleButtonClick);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.tagName);
      onClose();
    }
  };

  return (
    <>
    <Backdrop onClick={handleBackdropClick}>
    <Modal>
<Header>Ваша рекомендуемая суточная
норма калорий составляет</Header>
<Сalories></Сalories>
<Line></Line>
<Title>Продукты, которые вам <br />
не рекомендуется употреблять</Title>
<Products>
  <ol></ol>
</Products>
<ButtonMain><Button><StyledNavLink to="/daily/">Начать худеть</StyledNavLink></Button></ButtonMain>

<BtnClose><ButtonClose onClick={handleButtonClick}/></BtnClose>

    </Modal>
    </Backdrop>
    </>
    
  );
};

export default ModalProducts;