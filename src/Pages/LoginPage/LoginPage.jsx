import { Wrapper, Title } from './LoginPage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectUserIsLoading, selectUserError } from 'Redux/Auth/authSelectors';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
export default function LoginPage() {
  const isLoading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);

  return (
    <Wrapper>
      <Title>Вход</Title>
      <LoginForm />
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
    </Wrapper>
  );
}
