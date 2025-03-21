import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosPage } from './cargos.page';

describe('CargosPage', () => {
  let component: CargosPage;
  let fixture: ComponentFixture<CargosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
