import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValorParametroComponent } from './edit-valor-parametro.component';

describe('EditValorParametroComponent', () => {
  let component: EditValorParametroComponent;
  let fixture: ComponentFixture<EditValorParametroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditValorParametroComponent]
    });
    fixture = TestBed.createComponent(EditValorParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
