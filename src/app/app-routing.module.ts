import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'parametros',
    loadChildren: () => import('./parametros/parametros.module').then(m => m.ParametrosModule)
  },

  {
    path: 'interbancario',
    loadChildren: () => import('./interbancario/interbancario.module').then(m => m.InterbancarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
