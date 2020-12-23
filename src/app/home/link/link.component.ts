import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/core/models/links';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() link: Link;
  constructor() {}

  ngOnInit(): void {}
}
