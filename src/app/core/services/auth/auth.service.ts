import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(data: any): Observable<any> {
    // const tokenResponse = {
    //   token: '12312312312',
    // };
    // return of(tokenResponse);
    return this._http.post('auth/local', data);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }
}
