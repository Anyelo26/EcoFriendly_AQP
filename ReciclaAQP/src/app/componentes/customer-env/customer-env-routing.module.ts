import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPrincipalComponent } from './dynamic/dashboard/dashboard-principal/dashboard-principal.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: '',component:DashboardPrincipalComponent}
    ]
  
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerEnvRoutingModule { }
