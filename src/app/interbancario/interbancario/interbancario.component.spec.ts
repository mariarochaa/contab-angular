import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterbancarioComponent } from './interbancario.component';

describe('InterbancarioComponent', () => {
  let component: InterbancarioComponent;
  let fixture: ComponentFixture<InterbancarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterbancarioComponent]
    });
    fixture = TestBed.createComponent(InterbancarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
