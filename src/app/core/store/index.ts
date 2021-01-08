import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { LinksEffects } from './links/links.effects';
import { linksReducer } from './links/links.reducer';
import { LinksState } from './links/links.state';
import { UserEffects } from './user/user.effects';
import { userReducer } from './user/user.reducer';
import { UserState } from './user/user.state';

export interface RootState {
  auth: AuthState;
  user: UserState;
  links: LinksState;
}

export const appReducer = {
  auth: authReducer,
  user: userReducer,
  links: linksReducer,
};

export const appEffects = [AuthEffects, UserEffects, LinksEffects];
