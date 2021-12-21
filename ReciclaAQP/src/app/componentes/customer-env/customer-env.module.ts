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

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    CustomerEnvComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    CollectionCenterComponent,
    InformationComponent,
    FootprintComponent,

  ],
  imports: [
    CommonModule,
    CustomerEnvRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    AgmCoreModule,
    NgbCollapseModule,
    ChartsModule,
  ]
})
export class CustomerEnvModule { }
