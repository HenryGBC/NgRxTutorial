import { createReducer, on, Action } from '@ngrx/store';
import * as linksActions from './links.actions';
import { LinksState } from './links.state';
import { Link } from '../../models/links';

export const initialLinksState: LinksState = {
  links: [],
  loading: true,
  addLink: null,
  errorAddLink: null,
};

const linksReducerInternal = createReducer(
  initialLinksState,
  on(linksActions.loadLinks, (state, { loading }) => {
    return {
      ...state,
      loading,
    };
  }),
  on(linksActions.loadLinksComplete, (state, { loading, links }) => {
    return {
      ...state,
      loading,
      links,
    };
  }),
  on(linksActions.addLink, (state, { loading, link }) => {
    return {
      ...state,
      loading,
    };
  }),
  on(linksActions.addLInkComplete, (state, { link }) => {
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
