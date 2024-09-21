import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarclavePage } from './cambiarclave.page';

describe('CambiarclavePage', () => {
  let component: CambiarclavePage;
  let fixture: ComponentFixture<CambiarclavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
