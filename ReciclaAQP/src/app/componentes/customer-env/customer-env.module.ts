import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerEnvRoutingModule } from './customer-env-routing.module';

import { CustomerEnvComponent } from './customer-env.component';
import { BodyComponent } from './static/body/body.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { CollectionCenterComponent } from './dynamic/collection-center/collection-center.component';
import { InformationComponent } from './dynamic/information/information.component';
import { FootprintComponent } from './dynamic/footprint/footprint.component';


@NgModule({
  declarations: [ 
    CustomerEnvComponent, 
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    CollectionCenterComponent,
    InformationComponent,
    FootprintComponent
  
  ],
  imports: [
    CommonModule,
    CustomerEnvRoutingModule,
  ]
})
export class CustomerEnvModule { }
