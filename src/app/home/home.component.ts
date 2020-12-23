import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser, setLoaderUser } from '../core/store/user/user.actions';
import { User } from '../core/store/user/user.state';
import * as userSelectors from '../core/store/user/user.selectors';
import * as linksSelector from '../core/store/links/links.selectors';
import { logout } from '../core/store/auth/auth.actions';
import { Link } from '../core/models/links';
import { loadLinks } from '../core/store/links/links.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;
  loading$: Observable<boolean>;
  links$: Observable<Link[]>;
  loadingLinks$: Observable<boolean>;
  constructor(private _store: Store) {
    this.user$ = this._store.select(userSelectors.selectUser);
    this.loading$ = this._store.select(userSelectors.selectLoader);
    this.loadingLinks$ = this._store.select(linksSelector.selectLinksLoader);
    this.links$ = this._store.select(linksSelector.selectLinks);
  }

  ngOnInit(): void {
    this._store.dispatch(setLoaderUser({ loading: true }));
    this._store.dispatch(getUser());
    this._store.dispatch(loadLinks({ loading: true }));
    // this.user$.subscribe((user) => console.log(user));
    this.loadingLinks$.subscribe((res) => console.log(res));
  }

  logout() {
    this._store.dispatch(logout());
  }
}
