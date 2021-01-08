import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ServerMock } from '../mocks/app-serve.mock';

@Injectable()
export class AppMockInterceptorService implements HttpInterceptor {
  private _localServer: ServerMock;

  constructor() {
    this._localServer = new ServerMock();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._checkIsTest(req)) {
      return this._sendLocalServer(req);
    }
    return next.handle(req);
  }
  /**
   * Check if enviroment not is production and token is for test or email and password is given for test
   * @param req - Info request sended
   */
  private _checkIsTest(req: HttpRequest<any>): boolean {
    return environment.isTestServer;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  private _sendLocalServer(req): Observable<HttpEvent<any>> {
    const server = this._localServer;
    return server.request(req).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: HttpErrorResponse) => this._catchError(req, err))
    );
  }

  private _catchError(req: HttpRequest<any>, error: any) {
    const isForbidden = error.status === 403;
    const isUnathorized = error.status === 401;

    if (isUnathorized || isForbidden) {
      // this._showDialogSessionExpired();
      //logout
    }
    return throwError(error);
  }

  private _message(err) {
    const firstError = Object.keys(err)[0];
    const typeError = typeof err[firstError];
    const isStringError = typeError === 'string';

    if (!isStringError && typeError === 'object') {
      return this._message(err[firstError][0]);
    }
    return isStringError ? err[firstError] : err[firstError][0];
  }
}
