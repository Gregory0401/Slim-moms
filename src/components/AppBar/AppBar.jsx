import { Navigation } from "../Navigation/Navigation"
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';
import {
  
  Header,
} from './AppBar.styled';
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return (
    <Header >
      <Navigation />
      {isLoggedIn && token ? <UserAuthMenu /> : <AuthNavigation />}
    </Header>
  );
};