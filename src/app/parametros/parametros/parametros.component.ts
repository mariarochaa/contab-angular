import { EditValorParametroComponent } from './../edit-valor-parametro/edit-valor-parametro.component';
import { Component, Input } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Parametro } from '../model/parametro';
import { ParametrosService } from './../services/parametros.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrosDialogComponent } from 'src/app/shared/components/erros-dialog/erros-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss'],
})
export class ParametrosComponent {
  @Input() parametros$: Observable<Parametro[]>;
  readonly displayedColumns = [
    'codigoParametro',
    'descricaoParametro',
    'valorParametro',
  ];

  constructor(
    private parametrosService: ParametrosService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.parametros$ = this.parametrosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os parâmetros.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrosDialogComponent, {
      data: errorMsg,
    });
  }

  openDialog(parametro: Parametro): void {
    const dialogRef = this.dialog.open(EditValorParametroComponent, {
      data: parametro
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Record to update:', result);

        this.parametrosService.update(result).subscribe(
          (success) => console.log('Update success:', success),
          (error) => console.error('Update error:', error)
        );
      }
    });
  }
}
