import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectToken } from '../core/store/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  token$: Observable<string>;
  constructor(private _store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this._store.pipe(select(selectIsAuthenticated));
    this.isLoggedIn$.subscribe((data) => {
      console.log(data);
    });
    this.token$ = this._store.pipe(select(selectToken));
    this.token$.subscribe((data) => {
      console.log(data);
    });
  }
}
