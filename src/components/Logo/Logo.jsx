import { Link } from 'react-router-dom';

import LogoImage from '../../img/logo_image.svg';
import LogoText from '../../img/logo_text.svg';

import { Image, Text, LogoStyled } from './Logo.styled';

import logoMobile from '../../img/logo-mobile.svg';
import logoTablet from '../../img/logo-tablet.svg';
// import logoDesktop from '../../img/logo-desktop.svg';

import { useMediaQuery } from 'react-responsive';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';

export const Logo = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  // const isDesktop = useMediaQuery({ minWidth: 1280 });

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Link to="/diary">
        <LogoStyled>
          <Image src={LogoImage} alt="Logo" />
          <Text src={LogoText} alt="Logo" />
        </LogoStyled>
      </Link>

      <Link to="/diary">
        {isMobile && !isLoggedIn && <img src={logoMobile} alt="Slim Mom" />}
        {isMobile && isLoggedIn && <img src={logoTablet} alt="Slim Mom" />}
        {/* {isTablet && <img src={logoTablet} alt="Slim Mom" />}
        {isDesktop && (
          <img
            src={logoDesktop}
            alt="Slim Mom"
            style={{
              width: '167px',
              height: '66px',
            }}
          />
        )} */}
      </Link>
    </>
  );
};
