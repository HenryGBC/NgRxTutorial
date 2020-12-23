import { AuthState } from '../models/auth';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { UserEffects } from './user/user.effects';
import { userReducer } from './user/user.reducer';
import { UserState } from './user/user.state';

export interface RootState {
  auth: AuthState;
  user: UserState;
}
export const appReducer = {
  auth: authReducer,
  user: userReducer,
};
export const appEffects = [AuthEffects, UserEffects];
