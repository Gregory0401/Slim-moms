import { Navigation } from '../Navigation/Navigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { useMedia } from 'react-use';

import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectAccessToken,
} from '../../Redux/Auth/authSelectors';
import { Header, Wrapper, Menu } from './AppBar.styled';
import { ButtonBurger } from '../Buttons/ButtonBurger/ButtonBurger';
import { useState } from 'react';
import BurgerMenu from 'components/Modal/BurgerMenu/BurgerMenu';
import { Burger } from '../UserAuthMenu/UserAuthMenu.styled';

export const AppBar = () => {
  const [showModal, setShowModal] = useState(false);
  const isWide = useMedia('(max-width: 767px)');

  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectAccessToken);
  return (
    <Header>
      {isWide ? (
        <>
          <Wrapper>
            <Navigation />
            {!isLoggedIn && !token && <AuthNavigation />}
            {isLoggedIn && (
              <Burger>
                <ButtonBurger onClick={onToggleModal} />
              </Burger>
            )}
          </Wrapper>
          {isLoggedIn && token && <UserAuthMenu />}
        </>
      ) : (
        <>
          <Wrapper>
            <Navigation />
            {!isLoggedIn && !token && <AuthNavigation />}
            {isLoggedIn && token && <UserAuthMenu />}
            {isLoggedIn && (
              <Burger>
                <ButtonBurger onClick={onToggleModal} />
              </Burger>
            )}
          </Wrapper>
        </>
      )}

      {showModal && (
        <Menu>
          <BurgerMenu />
        </Menu>
      )}
    </Header>
  );
};
