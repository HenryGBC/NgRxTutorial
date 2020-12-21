import { createReducer, on, Action } from '@ngrx/store';
import { AuthState } from '../../models/auth';
import * as authActions from './auth.actions';

export const initialAuthState: AuthState = {
  isLogged: false,
  token: '',
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(authActions.loginComplete, (state, { isLogged, token }) => {
    return {
      ...state,
      isLogged,
      token,
    };
  }),
  on(authActions.loginGuardComplete, (state, { isLogged, token }) => {
    return {
      ...state,
      isLogged,
      token,
    };
  }),
  on(authActions.logout, (state, {}) => {
    return {
      ...state,
      isLogged: false,
      token: '',
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
