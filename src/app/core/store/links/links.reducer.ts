import { createReducer, on, Action } from '@ngrx/store';
import * as linksActions from './links.actions';
import { LinksState } from './links.state';
import { Link } from '../../models/links';

export const initialLinksState: LinksState = {
  links: [],
  loading: false,
  addLink: null,
  errorAddLink: null,
};

const linksReducerInternal = createReducer(
  initialLinksState,
  on(linksActions.loadLinks, (state, {}) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(linksActions.loadLinksComplete, (state, { links }) => {
    return {
      ...state,
      loading: false,
      links,
    };
  }),
  on(linksActions.addLink, (state, { link }) => {
    return {
      ...state,
      addLink: false,
    };
  }),
  on(linksActions.addLinkComplete, (state, { link }) => {
    return {
      ...state,
      loading: false,
      addLink: true,
      links: [link, ...state.links],
    };
  }),
  on(linksActions.clearLinkForm, (state) => {
    return {
      ...state,
      addLink: false,
    };
  })
);

export function linksReducer(state: LinksState | undefined, action: Action) {
  return linksReducerInternal(state, action);
}
