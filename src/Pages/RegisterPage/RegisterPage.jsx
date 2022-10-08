import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {Wrapper, Title } from "./RegisterPage.styled"


export default function RegisterPage() {
  return (
    <Wrapper >
      <Title>Регистрация</Title>      
      <RegisterForm />
    </Wrapper>
  );
}