
import { StyledNavLink, Wrapper } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/login">Вход</StyledNavLink>
      <StyledNavLink to="/register">Регистрация</StyledNavLink>
    </Wrapper>
  );
};
