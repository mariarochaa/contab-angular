export interface Interbancario {

  id: number;
  dtMovimento: Date;
  cdBancoDebito: number;
  cdAgDebito: number;
  cdAgCredito: number;
  dsSituacao: string;
  nuValor: number
}
