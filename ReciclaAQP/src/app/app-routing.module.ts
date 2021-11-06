import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SuperAdmin',
    loadChildren:() => import ('./componentes/super-admin-env/admin-env.module').then(m=>m.AdminEnvModule),
  },
  {  path: 'Sesion',
     loadChildren:()=>import ('./componentes/sessions/sessions.module').then(m=>m.SessionsModule),
  },
  {  path: '',
     loadChildren:()=>import ('./componentes/customer-env/customer-env.module').then(m=>m.CustomerEnvModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
