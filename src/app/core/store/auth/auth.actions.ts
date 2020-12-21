import { createAction, props } from '@ngrx/store';

export const checkAuth = createAction('[Auth] checkAuth');
export const checkAuthComplete = createAction(
  '[Auth] checkAuthComplete',
  props<{ isLoggedIn: boolean }>()
);

export const login = createAction(
  '[Auth] Login',
  props<{ password: string; email: string }>()
);
export const loginComplete = createAction(
  '[Auth] loginComplete',
  props<{ isLogged: boolean; token: string }>()
);
export const loginGuardComplete = createAction(
  '[Auth] loginGuardComplete',
  props<{ isLogged: boolean; token: string }>()
);
export const logout = createAction('[Auth] Logout');
export const logoutComplete = createAction('[Auth] logoutComplete');
