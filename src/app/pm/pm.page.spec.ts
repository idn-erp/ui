import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmPage } from './pm.page';

describe('PmPage', () => {
  let component: PmPage;
  let fixture: ComponentFixture<PmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
