import { createAction, props } from '@ngrx/store';
import { User } from './user.state';

export const updateUser = createAction(
  '[User] update user',
  props<{ loading: boolean; user: User }>()
);
export const getUser = createAction('[User] get user');
export const setLoaderUser = createAction(
  '[User] set loader user',
  props<{ loading: boolean }>()
);
