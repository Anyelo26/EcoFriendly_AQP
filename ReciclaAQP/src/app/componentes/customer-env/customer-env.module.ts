import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerEnvRoutingModule } from './customer-env-routing.module';
import { DashboardPrincipalComponent } from './dynamic/dashboard/dashboard-principal/dashboard-principal.component';
import { CustomerEnvComponent } from './customer-env.component';


@NgModule({
  declarations: [DashboardPrincipalComponent, CustomerEnvComponent],
  imports: [
    CommonModule,
    CustomerEnvRoutingModule,
  ]
})
export class CustomerEnvModule { }
