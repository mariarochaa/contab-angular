import { TestBed } from '@angular/core/testing';

import { InterbancarioService } from './interbancario.service';

describe('InterbancarioService', () => {
  let service: InterbancarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterbancarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
