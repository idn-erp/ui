import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationalSupervisorsPage } from './educational-supervisors.page';

describe('EducationalSupervisorsPage', () => {
  let component: EducationalSupervisorsPage;
  let fixture: ComponentFixture<EducationalSupervisorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EducationalSupervisorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
