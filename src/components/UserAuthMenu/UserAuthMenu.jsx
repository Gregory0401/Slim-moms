import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { Name, Logout, Wrapper } from './UserAuthMenu.styled';
export const UserAuthMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Name>{user?.name}</Name>
      <Logout type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </Logout>
    </Wrapper>
  );
};
