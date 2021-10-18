import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { SuperUserDetailComponent } from './super-user/super-user-detail/super-user-detail.component';
import { SuperUserListComponent } from './super-user/super-user-list/super-user-list.component';


@NgModule({
  declarations: [
    SuperUserDetailComponent,
    SuperUserListComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule { }
