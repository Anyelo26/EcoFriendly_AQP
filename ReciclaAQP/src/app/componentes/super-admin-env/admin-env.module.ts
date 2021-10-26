import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEnvRoutingModule } from './admin-env-routing.module';

import { UserCreateComponent } from './dynamic/user/user-create/user-create.component';
import {UserListComponent} from './dynamic/user/user-list/user-list.component';
import { UserEditComponent } from './dynamic/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './dynamic/user/user-delete/user-delete.component';
import { UserViewComponent } from './dynamic/user/user-view/user-view.component';

import { ProfileComponent } from './dynamic/profile/profile.component';

import { InformationViewComponent } from './dynamic/information/information-view/information-view.component';
import { InformationCreateComponent } from './dynamic/information/information-create/information-create.component';
import { InformationDeleteComponent } from './dynamic/information/information-delete/information-delete.component';
import { InformationEditComponent } from './dynamic/information/information-edit/information-edit.component';
import { InformationListComponent } from './dynamic/information/information-list/information-list.component';

import { CollectionCenterCreateComponent } from './dynamic/collection-center/center-create/center-create.component';
import { CollectionCenterDeleteComponent } from './dynamic/collection-center/center-delete/center-delete.component';
import { CollectionCenterEditComponent } from './dynamic/collection-center/center-edit/center-edit.component';
import { CollectionCenterListComponent } from './dynamic/collection-center/center-list/center-list.component';
import { CollectionCenterViewComponent } from './dynamic/collection-center/center-view/collection-center-view.component';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserDeleteComponent,
    UserListComponent,
    UserEditComponent,
    UserViewComponent,
    ProfileComponent,
    InformationViewComponent,
    InformationCreateComponent,
    InformationEditComponent,
    InformationDeleteComponent,
    InformationListComponent,
    CollectionCenterCreateComponent,
    CollectionCenterDeleteComponent,
    CollectionCenterEditComponent,
    CollectionCenterListComponent,
    CollectionCenterViewComponent, 
  ],
  imports: [
    CommonModule,
    AdminEnvRoutingModule,   
  ]
})
export class AdminEnvModule { }
