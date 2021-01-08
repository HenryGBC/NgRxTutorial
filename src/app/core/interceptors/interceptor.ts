import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { finalize, catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth/auth.actions';

const API_URL = environment.apiUrl;
@Injectable()
export class AppInterceptorService implements HttpInterceptor {
  private _requests = [];
  private _mapErrors: Map<any, string>;

  constructor(private _store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this._sendRequest(req, next);
  }

  private _sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqModified;
    const headers: any = {
      'Content-Type': 'application/json',
      'Accept-Language': 'es-CO',
    };
    const token = this.getToken();
    if (token && token != 'null') {
      headers.Authorization = `Bearer ${token}`;
    }
    reqModified = req.clone({
      url: API_URL + req.url,
      setHeaders: headers,
    });

    return next.handle(reqModified).pipe(
      catchError((err: any) => this._catchError(API_URL, req, err)),
      map((response: any) => {
        // this._checkTokenResponse(response);
        return response;
      })
    );
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
  private _catchError(server: string, req: HttpRequest<any>, error: any) {
    const isForbidden = error.status === 403;
    const isUnathorized = error.status === 401;

    if (isUnathorized || isForbidden) {
      // this._showDialogSessionExpired();
      //logout
      this._store.dispatch(logout());
    }
    return throwError(error);
  }
}
