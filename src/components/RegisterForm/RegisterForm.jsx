import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  Form,
  Input,
  Label,
  BtnR,
  StyledNavLink,
  Wrapper,
} from './RegisterForm.styled';
export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Имя *
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        Логин *
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Пароль *
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Wrapper>
        <BtnR type="submit"> Регистрация </BtnR>
        <StyledNavLink to="/login">Вход</StyledNavLink>
      </Wrapper>
    </Form>
  );
};
