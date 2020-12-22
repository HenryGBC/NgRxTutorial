import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { AuthState } from './auth.model';

export const initialAuthState: AuthState = {
  isLogged: false,
  token: '',
  hasRedirect: false,
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(authActions.loginComplete, (state, { isLogged, token, hasRedirect }) => {
    return {
      ...state,
      isLogged,
      token,
      hasRedirect,
    };
  }),
  on(authActions.logout, (state, {}) => {
    return {
      ...state,
      isLogged: false,
      token: '',
      hasRedirect: false,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
