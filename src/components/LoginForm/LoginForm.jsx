import {
  Form,
  Input,
  Label,
  StyledNavLink,
  BtnL,
  Wrapper,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/Auth/authOperation';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Логин *
        <Input type="email" name="email" />
      </Label>
      <Label>
        Пароль *
        <Input type="password" name="password" />
      </Label>
      <Wrapper>
        <BtnL type="submit"> Вход </BtnL>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </Wrapper>
    </Form>
  );
};
