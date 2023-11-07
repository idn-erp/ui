import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheTeachersPage } from './the-teachers.page';

describe('TheTeachersPage', () => {
  let component: TheTeachersPage;
  let fixture: ComponentFixture<TheTeachersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TheTeachersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
