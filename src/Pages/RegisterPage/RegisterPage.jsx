import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {Wrapper, Title } from "./RegisterPage.styled"
import { useSelector } from 'react-redux';
import {
  selectUserIsLoading,
  selectUserError,
} from 'Redux/Auth/authSelectors';
import Loader from 'components/Loader';
import Notification from 'components/Notification';

export default function RegisterPage() {
  const isLoading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);
  return (
    <Wrapper >
      <Title>Регистрация</Title>      
      <RegisterForm />
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
    </Wrapper>
  );
}