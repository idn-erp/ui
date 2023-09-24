import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrPage } from './hr.page';

describe('HrPage', () => {
  let component: HrPage;
  let fixture: ComponentFixture<HrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
