import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialAuthState: AuthState = {
  isLogged: false,
  token: '',
  hasErrorLogin: null,
  errorMessageLogin: null,
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(authActions.loginComplete, (state, { token }) => {
    return {
      ...state,
      isLogged: true,
      token,
    };
  }),
  on(authActions.setLogged, (state, { token }) => {
    return {
      ...state,
      isLogged: true,
      token,
    };
  }),
  on(authActions.logout, (state, {}) => {
    return {
      ...state,
      initialAuthState,
    };
  }),
  on(authActions.errorLogin, (state, { errorMessageLogin }) => {
    return {
      ...state,
      hasErrorLogin: true,
      errorMessageLogin,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
