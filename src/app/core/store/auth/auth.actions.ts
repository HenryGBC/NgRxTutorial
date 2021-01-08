import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ password: string; email: string }>()
);
export const loginComplete = createAction(
  '[Auth] LoginComplete',
  props<{ isLogged: boolean; token: string; hasRedirect: boolean }>()
);
export const logout = createAction('[Auth] Logout');
export const logoutComplete = createAction('[Auth] LogoutComplete');
export const errorLogin = createAction(
  '[Auth] ErrorLogin',
  props<{ errorMessageLogin: string }>()
);
