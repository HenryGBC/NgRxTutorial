import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Link } from '../core/models/links';
import { User } from '../core/models/user';
import { logout } from '../core/store/auth/auth.actions';
import { getUser } from '../core/store/user/user.actions';
import * as userSelectors from '../core/store/user/user.selectors';
import * as linksSelector from '../core/store/links/links.selectors';
import { loadLinks } from '../core/store/links/links.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;
  loadingUser$: Observable<boolean>;

  links$: Observable<Link[]>;
  loadingLinks$: Observable<boolean>;

  constructor(private _store: Store) {
    this.user$ = this._store.select(userSelectors.selectUser);
    this.loadingUser$ = this._store.select(userSelectors.selectLoader);
    this.loadingLinks$ = this._store.select(linksSelector.selectLinksLoader);
    this.links$ = this._store.select(linksSelector.selectLinks);
  }

  ngOnInit(): void {
    this._store.dispatch(getUser());
    this._store.dispatch(loadLinks());
  }

  logout() {
    this._store.dispatch(logout());
  }
}
