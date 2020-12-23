import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../../store/user/user.state';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  getUser(): Observable<User> {
    const userResponse = {
      fullName: 'Henry Bravo',
      avatar:
        'https://preview.keenthemes.com/metronic/theme/html/demo5/dist/assets/media/svg/avatars/018-girl-9.svg',
      role: 'Frontend Dev',
      description: 'lorem iasdmpoaiksd aspokd,sao posakdoa ds',
      countLinks: 4,
    };
    return of(userResponse).pipe(delay(5000));
  }
}