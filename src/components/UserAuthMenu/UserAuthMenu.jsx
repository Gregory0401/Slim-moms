import { useSelector, useDispatch } from 'react-redux';
import { selectUsername } from '../../Redux/Auth/authSelectors';
import { logOut } from 'Redux/Auth/authOperation';
import { Name, Logout, Wrapper } from './UserAuthMenu.styled';

export const UserAuthMenu = () => {
  const userName = useSelector(selectUsername);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Name>{userName}</Name>
      <Logout type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </Logout>
    </Wrapper>
  );
};
