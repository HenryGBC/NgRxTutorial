import { createAction, props } from '@ngrx/store';
import { Link } from '../../models/links';

export const loadLinks = createAction('[Links] LoadLinks');
export const loadLinksComplete = createAction(
  '[Links] LoadLinksComplete',
  props<{ links: Link[] }>()
);
export const addLink = createAction('[Links] AddLink', props<{ link: Link }>());
export const addLinkComplete = createAction(
  '[Links] AddLinkComplete',
  props<{ link: Link }>()
);

export const clearLinkForm = createAction('[Links] ClearLinkForm');
