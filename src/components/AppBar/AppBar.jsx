import { Navigation } from '../Navigation/Navigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { useMedia } from 'react-use';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/Auth/authSelectors';
import {
  Header,
  Wrapper,
  Menu,
  WrapperBurger,
  SecondWrapper,
} from './AppBar.styled';
import { ButtonBurger } from '../Buttons/ButtonBurger/ButtonBurger';
import { useState } from 'react';
import BurgerMenu from 'components/Modal/BurgerMenu/BurgerMenu';
import { Burger } from '../UserAuthMenu/UserAuthMenu.styled';
import Toggle from '../DarkTheme/Toggler'
// import {useDarkMode} from '../DarkTheme/useDarkMode'
// import { lightTheme, darkTheme } from '../DarkTheme/Theme'

export const AppBar = ({themeTogg, theme}) => {

  // const [theme, themeToggler] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [showModal, setShowModal] = useState(false);
  const isWide = useMedia('(max-width: 767px)');

  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      {isWide ? (
        <>
          <Wrapper>
            <Navigation />
            <Toggle theme={theme} toggleTheme={themeTogg} />
            {!isLoggedIn && <AuthNavigation />}
            {isLoggedIn && (
              <Burger>
                <ButtonBurger onClick={onToggleModal} />
              </Burger>
            )}
          </Wrapper>
          {isLoggedIn && <UserAuthMenu />}
        </>
      ) : (
        <>
          <SecondWrapper>
            <Navigation />
            <Toggle theme={theme} toggleTheme={themeTogg} />
            {!isLoggedIn && <AuthNavigation />}


            {isLoggedIn && (
              <WrapperBurger>
                <UserAuthMenu />
                {/* <Toggle toggleTheme={themeTogg} /> */}
                <Burger>
                  <ButtonBurger onClick={onToggleModal} />
                </Burger>
              </WrapperBurger>
            )}
          </SecondWrapper>
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
