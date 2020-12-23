import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/store/user/user.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
