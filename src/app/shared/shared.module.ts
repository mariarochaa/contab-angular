import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosDialogComponent } from './components/erros-dialog/erros-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
    ErrosDialogComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [ErrosDialogComponent]
})
export class SharedModule { }
