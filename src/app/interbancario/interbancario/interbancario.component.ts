import { InterbancarioService } from './../services/interbancario.service';
import { Component, Input } from '@angular/core';
import { Interbancario } from '../model/interbancario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interbancario',
  templateUrl: './interbancario.component.html',
  styleUrls: ['./interbancario.component.scss']
})
export class InterbancarioComponent {

  @Input() interbancario$: Observable<Interbancario[]>;
  readonly displayedColumns = [
    'id',
    'dtMovimento',
    'cdBancoDebito',
    'cdAgDebito',
    'cdAgCredito',
    'dsSituacao',
    'nuValor'
  ];

  constructor(
    private interbancarioService: InterbancarioService,
    ) {
    this.interbancario$ = this.interbancarioService.list().pipe( );
  }
}

