import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DashboardPrincipalComponent } from './dashboard/dashboard-principal/dashboard-principal.component';


@NgModule({
  declarations: [
    DashboardPrincipalComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule { }
