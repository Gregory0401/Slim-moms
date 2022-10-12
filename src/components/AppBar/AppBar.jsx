import { Navigation } from '../Navigation/Navigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';

import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectAccessToken,
} from '../../Redux/Auth/authSelectors';
import { Header, Wrapper, Menu } from './AppBar.styled';
import {ButtonBurger} from '../Buttons/ButtonBurger/ButtonBurger';
import { useState } from 'react';
import BurgerMenu from 'components/Modal/BurgerMenu/BurgerMenu';
import {Burger} from '../UserAuthMenu/UserAuthMenu.styled'


export const AppBar = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectAccessToken);
  return (
    <Header>

      <Wrapper>
        <Navigation />
        {!isLoggedIn && !token && <AuthNavigation /> }
        {isLoggedIn &&  <Burger><ButtonBurger onClick={onToggleModal}/></Burger>}
      </Wrapper>
      {isLoggedIn && token && <UserAuthMenu />}
      
      {showModal && <Menu><BurgerMenu /></Menu> }
    </Header>
    
    
    
    
     
  );
};
