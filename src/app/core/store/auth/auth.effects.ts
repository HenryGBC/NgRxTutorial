import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap((payload) =>
        this._authService.login(payload).pipe(
          map((response) =>
            authActions.loginComplete({
              token: response.access_token,
            })
          ),
          catchError(() =>
            of(
              authActions.errorLogin({
                errorMessageLogin: 'Errorrrr',
              })
            )
          )
        )
      )
    )
  );

  loginComplete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginComplete),
        tap((data) => {
          localStorage.setItem('token', data.token);
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logout),
        tap(() => {
          localStorage.removeItem('token');
          this._router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );
}
