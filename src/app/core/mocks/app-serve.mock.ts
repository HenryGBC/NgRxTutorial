import { Observable, throwError, of } from 'rxjs';
import {
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

// import OnBoardingSteps from './on-boarding-steps.json';
import { environment } from 'src/environments/environment';
// import User from './user.json';
// import Payments from './payments.json';
import TokenResponse from './data/token.json';
import UserResponse from './data/user.json';
import LinksResponse from './data/links.json';

const ROUTES_MOCK = [
  { url: '\\/auth\\/login\\/', data: TokenResponse },
  { url: '\\/users\\/user\\/', data: UserResponse },
  { url: '\\/links\\/list\\/', data: LinksResponse },
  { url: '\\/links\\/create\\/', data: { msg: 200 } },
];

export class ServerMock {
  public request(req): Observable<HttpEvent<any>> {
    const statusResponse = 200;
    const response = ROUTES_MOCK.find((route) =>
      new RegExp('(^' + route.url + '$)', 'g').test(req.url)
    );
    if (!response) {
      return throwError(
        new HttpErrorResponse({
          status: 404,
          statusText: `The route was not found ${req.url}`,
        })
      );
    }

    return new Observable((obs) => {
      setTimeout(() => {
        obs.next(
          new HttpResponse({ status: statusResponse, body: response.data })
        );
        obs.complete();
      }, 2000);
    });

    // return of(
    //   new HttpResponse({ status: statusResponse, body: response.data })
    // );
  }
}
