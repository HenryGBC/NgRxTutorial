import { AuthState } from '../models/auth';
import { authReducer, AuthEffects } from './auth';

export interface RootState {
  auth: AuthState;
}
export const appReducer = {
  auth: authReducer,
};
export const appEffects = [AuthEffects];
