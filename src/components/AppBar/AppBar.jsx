import { Navigation } from '../Navigation/Navigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';

import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectAccessToken,
} from '../../Redux/Auth/authSelectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectAccessToken);
  return (
    <Header>
      <Navigation />
      {isLoggedIn && token ? <UserAuthMenu /> : <AuthNavigation />}
    </Header>
  );
};
