import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as linksReducer from './links.reducer';
import { LinksState } from './links.state';

// export const selectAuthState = createSelector(authReducer);
export const getLinksFeatureState = createFeatureSelector('links');

export const selectLinks = createSelector(
  getLinksFeatureState,
  (state: LinksState) => state.links
);
export const selectLinksLoader = createSelector(
  getLinksFeatureState,
  (state: LinksState) => state.loading
);
export const selectAddLink = createSelector(
  getLinksFeatureState,
  (state: LinksState) => state.addLink
);
