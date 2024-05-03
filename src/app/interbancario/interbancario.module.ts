import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { InterbancarioRoutingModule } from './interbancario-routing.module';
import { InterbancarioComponent } from './interbancario/interbancario.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InterbancarioComponent
  ],
  imports: [
    CommonModule,
    InterbancarioRoutingModule,
    AppMaterialModule,
    SharedModule,

  ]
})
export class InterbancarioModule { }
