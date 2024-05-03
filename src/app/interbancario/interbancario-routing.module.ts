import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterbancarioComponent } from './interbancario/interbancario.component';

const routes: Routes = [
  {path: '', component: InterbancarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterbancarioRoutingModule { }
