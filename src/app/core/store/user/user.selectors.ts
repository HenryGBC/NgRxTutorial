import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

// export const selectAuthState = createSelector(authReducer);
export const getUserFeatureState = createFeatureSelector('user');

export const selectUser = createSelector(
  getUserFeatureState,
  (state: UserState) => state.user
);
export const selectLoader = createSelector(
  getUserFeatureState,
  (state: UserState) => state.loading
);
