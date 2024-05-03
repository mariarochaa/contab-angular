import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interbancario } from '../model/interbancario';

import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterbancarioService {

  private readonly API = '/api/interbancario/v1';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Interbancario[]>(this.API)
    .pipe(
      first(),
      tap(interbancario => console.log(interbancario))
    );
  }

}
