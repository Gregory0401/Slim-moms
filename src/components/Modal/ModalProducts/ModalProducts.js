import React from "react";
import {Backdrop, Modal, Header, Сalories, Line, Title, Products, ButtonMain, BtnClose, Cal} from './ModalProducts.styled'
import { useEffect } from "react";
import {Button} from '../../Buttons/BattonMainActive/BattonMainActive.styled'
import {ButtonClose} from '../../Buttons/ButtonClose/ButtonClose'
import {StyledNavLink} from '../../RegisterForm/RegisterForm.styled'
import {useSelector} from 'react-redux'
import {selectDailyRate, selectNotAllowedProducts} from '../../../Redux/DailyRate/DailyRateSelectors'

const ModalProducts = ({onClose}) => {



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
      onClose();
    }
  };

const raite = useSelector(selectDailyRate);
const productsNo = useSelector(selectNotAllowedProducts)

const randomProducts = () => {
  const elemProductsNum = 5
  const newProductsArr = new Array(elemProductsNum ).fill(0).map(() => productsNo[Math.floor(Math.random() * productsNo.length)])
  return newProductsArr
}

  return (
    <>
    <Backdrop onClick={handleBackdropClick}>
    <Modal>
<Header>Ваша рекомендуемая суточная
норма калорий составляет</Header>
<Сalories>{raite} <Cal>ккал</Cal></Сalories>
<Line></Line>
<Title>Продукты, которые вам <br />
не рекомендуется употреблять</Title>
<Products>
{randomProducts().map((product, id) => (
            <li key={id}>
              {product}
            </li>
          ))}
</Products>
<ButtonMain><Button><StyledNavLink to="/daily/">Начать худеть</StyledNavLink></Button></ButtonMain>

<BtnClose><ButtonClose onClick={handleButtonClick} onClose={onClose}/></BtnClose>

    </Modal>
    </Backdrop>
    </>
    
  );
};

export default ModalProducts;