import { ParametrosService } from './../services/parametros.service';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Parametro } from '../model/parametro';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-valor-parametro',
  templateUrl: './edit-valor-parametro.component.html',
  styleUrls: ['./edit-valor-parametro.component.scss']
})
export class EditValorParametroComponent {
  form: FormGroup;
  updatedParametro: Parametro;

  constructor(
    public dialogRef: MatDialogRef<EditValorParametroComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Parametro,
    private parametrosService: ParametrosService,
    private snackBar: MatSnackBar
  ) {
    this.updatedParametro = { ...data };
    this.form = this.fb.group({
      valorParametro: [this.data.valorParametro, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {

      this.parametrosService.update(this.data).subscribe({
        next: (success) => {
          console.log('Update success:', success);
          this.snackBar.open('Parâmetro atualizado com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.dialogRef.close(this.data);
        },
        error: (error) => {
          console.error('Update error:', error);
          this.snackBar.open('Erro ao atualizar parâmetro!', 'Fechar', {
            duration: 3000,
          });
        }
      });
    } else {
      console.error('Dados do parâmetro são inválidos ou o ID está ausente');
      this.snackBar.open('Dados inválidos!', 'Fechar', {
        duration: 3000,
      });
    }
  }
}
