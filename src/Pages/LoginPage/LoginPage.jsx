import { Wrapper, Title } from './LoginPage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <Wrapper>
      <Title>Вход</Title>
      <LoginForm />
    </Wrapper>
  );
}
