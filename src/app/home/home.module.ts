import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { LinkComponent } from './link/link.component';
import { AddLinkComponent } from './add-link/add-link.component';


@NgModule({
  declarations: [HomeComponent, ProfileComponent, LinkComponent, AddLinkComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
