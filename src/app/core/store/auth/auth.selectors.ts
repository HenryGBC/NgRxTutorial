import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authReducer from './auth.reducer';
import { AuthState } from '../../models/auth';

// export const selectAuthState = createSelector(authReducer);
export const getAuthFeatureState = createFeatureSelector('auth');

export const selectIsAuthenticated = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLogged
);
export const selectToken = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.token
);
// export const selectUserInfo = createSelector(
//   getAuthFeatureState,
//   (state: AuthState) => state.profile
// );
