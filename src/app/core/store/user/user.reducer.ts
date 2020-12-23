import { createReducer, on, Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { UserState } from './user.state';

export const initialUserState: UserState = {
  loading: false,
  user: null,
};

const userReducerInternal = createReducer(
  initialUserState,
  on(userActions.updateUser, (state, { user }) => {
    const loading = false;
    return {
      ...state,
      loading,
      user,
    };
  }),
  on(userActions.setLoaderUser, (state, { loading }) => {
    return {
      ...state,
      loading,
    };
  }),
  on(userActions.getUser, (state) => {
    return {
      ...state,
    };
  })
);

export function userReducer(state: UserState | undefined, action: Action) {
  return userReducerInternal(state, action);
}
