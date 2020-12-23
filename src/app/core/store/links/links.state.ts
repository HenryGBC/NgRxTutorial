import { Link } from '../../models/links';

export interface LinksState {
  links: Link[];
  loading: boolean;
  addLink: boolean | null;
  errorAddLink: boolean | null;
}

export interface LinkState {
  link: Link;
}
