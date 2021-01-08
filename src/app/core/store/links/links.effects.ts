import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import * as linksActions from './links.actions';
import { LinksService } from '../../services/links/links.service';

@Injectable()
export class LinksEffects {
  constructor(private actions$: Actions, private _linksService: LinksService) {}

  loadLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linksActions.loadLinks),
      switchMap(() =>
        this._linksService.getLinks().pipe(
          map((response) =>
            linksActions.loadLinksComplete({
              links: response,
            })
          )
        )
      )
    )
  );

  addLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linksActions.addLink),
      switchMap((payload) => this._linksService.addLink(payload.link)),
      map((link) => linksActions.addLinkComplete({ link }))
    )
  );
}
