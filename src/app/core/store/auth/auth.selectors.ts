import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authReducer from './auth.reducer';
import { AuthState } from './auth.state';

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

export const selectIsAuthStateLoginError = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.hasErrorLogin
);
export const selectIsAuthStateLoginErrorMsg = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.errorMessageLogin
);
