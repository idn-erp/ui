import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkShiftPage } from './work-shift.page';

describe('WorkShiftPage', () => {
  let component: WorkShiftPage;
  let fixture: ComponentFixture<WorkShiftPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
