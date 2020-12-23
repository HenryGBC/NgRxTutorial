import { createAction, props } from '@ngrx/store';
import { Link } from '../../models/links';

export const loadLinks = createAction(
  '[Links] load links',
  props<{ loading: boolean }>()
);
export const loadLinksComplete = createAction(
  '[Links] load links complete',
  props<{ loading: boolean; links: Link[] }>()
);
export const addLink = createAction(
  '[Links] add link',
  props<{ loading: boolean; link: Link }>()
);
export const addLInkComplete = createAction(
  '[Links] add link complete',
  props<{ link: Link }>()
);

export const clearLinkForm = createAction('[Links] clear form link');
