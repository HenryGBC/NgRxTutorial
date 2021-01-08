import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const updateUser = createAction(
  '[User] UpdateUser',
  props<{ user: User }>()
);

export const getUser = createAction('[User] GetUser');
