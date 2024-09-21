import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarasistenciaPage } from './registrarasistencia.page';

describe('RegistrarasistenciaPage', () => {
  let component: RegistrarasistenciaPage;
  let fixture: ComponentFixture<RegistrarasistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
