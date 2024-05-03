import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-erros-dialog',
  templateUrl: './erros-dialog.component.html',
  styleUrls: ['./erros-dialog.component.scss']
})
export class ErrosDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
