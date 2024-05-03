import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosComponent } from './parametros/parametros.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EditValorParametroComponent } from './edit-valor-parametro/edit-valor-parametro.component';




@NgModule({
  declarations: [
    ParametrosComponent,
    EditValorParametroComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ParametrosModule { }
