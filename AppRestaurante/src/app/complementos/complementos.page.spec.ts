import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementosPage } from './complementos.page';

describe('ComplementosPage', () => {
  let component: ComplementosPage;
  let fixture: ComponentFixture<ComplementosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
