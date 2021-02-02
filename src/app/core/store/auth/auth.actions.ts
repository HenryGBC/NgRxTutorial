import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ password: string; identifier: string }>()
);
export const loginComplete = createAction(
  '[Auth] LoginComplete',
  props<{ token: string }>()
);

export const setLogged = createAction(
  '[Auth] SetLogged',
  props<{ token: string }>()
);

export const logout = createAction('[Auth] Logout');
export const errorLogin = createAction(
  '[Auth] ErrorLogin',
  props<{ errorMessageLogin: string }>()
);
