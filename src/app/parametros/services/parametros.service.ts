import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parametro } from '../model/parametro';

import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  private readonly API = '/api/parametro/v1';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Parametro[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(parametros => console.log(parametros))
    );
  }


  update(record:  Partial<Parametro> ) {
    const id = record.id;
    if (!id) {
      throw new Error('ID do parâmetro é undefined');
    }
    return this.httpClient.put<Parametro>(`${this.API}`, record).pipe(first());
  }

}
