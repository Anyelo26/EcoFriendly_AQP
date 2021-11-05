import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SuperAdminEnvComponent } from './super-admin-env.component';
import { BodyComponent } from './static/body/body.component';

const routes: Routes = [
  {
    path:'',component :SuperAdminEnvComponent,
    children:[
      {path:'Main',component:BodyComponent},
      {path: 'UserCreate',component: UserCreateComponent},
      {path: 'UserList',component: UserListComponent},
      {path: 'UserDelete',component: UserDeleteComponent},
      {path: 'UserView',component: UserViewComponent},
      {path: 'UserEdit',component: UserEditComponent},
      {path: 'Profile',component: ProfileComponent},
      {path: 'InformationView',component: InformationViewComponent},
      {path: 'InformationEdit',component: InformationEditComponent},
      {path: 'InformationDelete',component: InformationDeleteComponent},
      {path: 'InformationList',component: InformationListComponent},
      {path: 'InformationCreate',component: InformationCreateComponent},
      {path: 'CollectionCenterCreate',component: CollectionCenterCreateComponent},
      {path: 'CollectionCenterDelete',component: CollectionCenterDeleteComponent},
      {path: 'CollectionCenterEdit',component: CollectionCenterEditComponent},
      {path: 'CollectionCenterList',component: CollectionCenterListComponent},
      {path: 'CollectionCenterView',component: CollectionCenterViewComponent},
      {path: 'body', component: BodyComponent},

    ]



  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEnvRoutingModule { }
