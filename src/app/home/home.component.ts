import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user = {
    email: 'henry.bravo89@gmail.com',
    fullName: 'Henry Bravo',
    password: 'Hbravo0123',
    role: 'Software Engineer',
    avatar:
      'https://preview.keenthemes.com/metronic/theme/html/demo5/dist/assets/media/svg/avatars/018-girl-9.svg',
    description: 'Frontend Love',
    countLinks: '4',
  };
  constructor(private _store: Store) {}

  ngOnInit(): void {}

  logout() {}
}
