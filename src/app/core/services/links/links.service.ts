import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Link } from '../../models/links';

@Injectable({ providedIn: 'root' })
export class LinksService {
  constructor() {}

  addLink(data: Link) {
    const response = {
      code: 200,
    };
    return of(data).pipe(delay(1000));
  }
  getLinks(): Observable<Link[]> {
    const linksResponse = [
      {
        id: 1,
        name: 'Henry Bravo',
        url:
          'https://dev.to/smeijer/don-t-skip-elements-with-array-destructuring-3fl9',
        date: '2020-12-01',
      },
      {
        id: 2,
        name: 'Nombre del enlace',
        url:
          'https://dev.to/smeijer/don-t-skip-elements-with-array-destructuring-3fl9',
        date: '2020-12-02',
      },
      {
        id: 3,
        name: 'Henry Bravo',
        url:
          'https://dev.to/smeijer/don-t-skip-elements-with-array-destructuring-3fl9',
        date: '2020-12-03',
      },
      {
        id: 4,
        name: 'Henry Bravo',
        url:
          'https://dev.to/smeijer/don-t-skip-elements-with-array-destructuring-3fl9',
        date: '2020-12-04',
      },
      {
        id: 5,
        name: 'Henry Bravo',
        url:
          'https://dev.to/smeijer/don-t-skip-elements-with-array-destructuring-3fl9',
        date: '2020-12-05',
      },
      {
        id: 6,
        name: 'Henry Bravo',
        url:
          'https://dev.to/smeijer/don-t-skip-elements-with-array-destructuring-3fl9',
        date: '2020-12-06',
      },
    ];
    return of(linksResponse).pipe(delay(5000));
  }
}
