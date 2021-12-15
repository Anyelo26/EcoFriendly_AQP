import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SessionsRoutingModule } from './sessions-routing.module';
import { LoginComponent } from './login/login.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    SessionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class SessionsModule { }
