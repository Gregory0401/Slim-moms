import { Link } from 'react-router-dom';

import LogoImage from '../../img/logo_image.svg';
import LogoText from '../../img/logo_text.svg';

import { Image, Text, LogoStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <Link to="/diary">
      <LogoStyled>
        <Image src={LogoImage} alt="Logo" />
        <Text src={LogoText} alt="Logo" />
      </LogoStyled>
    </Link>
  );
};
