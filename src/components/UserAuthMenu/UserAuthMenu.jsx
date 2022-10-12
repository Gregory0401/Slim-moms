import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectUsername } from '../../Redux/Auth/authSelectors';
import { logOut } from 'Redux/Auth/authOperation';
import { Name, Logout, Wrapper } from './UserAuthMenu.styled';
import {ButtonBurger} from '../Buttons/ButtonBurger/ButtonBurger';
import { selectIsLoggedIn } from '../../Redux/Auth/authSelectors';




export const UserAuthMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUsername);
  const dispatch = useDispatch();

  // const [showModal, setShowModal] = useState(false);

  // const onToggleModal = () => {
  //   setShowModal(prevState => !prevState);
  // };

  return (
    <>
    <Wrapper>
      <Name>{userName}</Name>
      <Logout type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </Logout>
      {isLoggedIn &&  <ButtonBurger onClick={onToggleModal}/>}
    </Wrapper>
   
    </>
  );
};
