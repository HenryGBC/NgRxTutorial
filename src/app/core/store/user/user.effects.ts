import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import * as userActions from './user.actions';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private _userService: UserService,
    private _router: Router
  ) {}

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUser),
      switchMap(() =>
        this._userService.getUser().pipe(
          map((response) =>
            userActions.updateUser({
              user: response,
            })
          )
        )
      )
    )
  );
}
