import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTimesheetPage } from './add-timesheet.page';

describe('AddTimesheetPage', () => {
  let component: AddTimesheetPage;
  let fixture: ComponentFixture<AddTimesheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTimesheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
