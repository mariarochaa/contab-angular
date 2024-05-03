import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [
  { path:'', component: ParametrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
