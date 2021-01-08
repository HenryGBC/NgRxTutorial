import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { AuthState } from './auth.model';

export const initialAuthState: AuthState = {
  isLogged: false,
  token: '',
  hasRedirect: false,
  hasErrorLogin: null,
  errorMessageLogin: null,
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(authActions.loginComplete, (state, { isLogged, token, hasRedirect }) => {
    return {
      ...state,
      isLogged,
      token,
      hasRedirect,
      hasErrorLogin: false,
    };
  }),
  on(authActions.logout, (state, {}) => {
    return {
      ...state,
      isLogged: false,
      token: '',
      hasRedirect: false,
      hasErrorLogin: false,
    };
  }),
  on(authActions.errorLogin, (state, { errorMessageLogin }) => {
    console.log(errorMessageLogin);
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
