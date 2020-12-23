import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser, setLoaderUser } from '../core/store/user/user.actions';
import { User } from '../core/store/user/user.state';
import * as userSelectors from '../core/store/user/user.selectors';
import { logout } from '../core/store/auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;
  loading$: Observable<boolean>;
  constructor(private _store: Store) {
    this.user$ = this._store.select(userSelectors.selectUser);
    this.loading$ = this._store.select(userSelectors.selectLoader);
  }

  ngOnInit(): void {
    this._store.dispatch(setLoaderUser({ loading: true }));
    this._store.dispatch(getUser());
    // this.user$.subscribe((user) => console.log(user));
  }

  logout() {
    this._store.dispatch(logout());
  }
}
