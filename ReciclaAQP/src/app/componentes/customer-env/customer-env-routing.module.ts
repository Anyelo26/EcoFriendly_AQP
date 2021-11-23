import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEnvComponent } from './customer-env.component';
import { CollectionCenterComponent } from './dynamic/collection-center/collection-center.component';
import { FootprintComponent } from './dynamic/footprint/footprint.component';
import { InformationComponent } from './dynamic/information/information.component';
import { BodyComponent } from './static/body/body.component';
import { InfoDetailComponent } from './dynamic/information/info-detail/info-detail.component';


const routes: Routes = [
  {
    path:'',component:CustomerEnvComponent,
    children:[
      {path: '',component:BodyComponent},
      {path: 'Information',component:InformationComponent},
      {path: 'CollectionCenter',component:CollectionCenterComponent},
      {path: 'Footprint',component:FootprintComponent},
      {path: 'Detail',component:InfoDetailComponent}
    ]
  
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerEnvRoutingModule { }
