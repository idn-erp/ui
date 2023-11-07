import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupervisoryMethodsPage } from './supervisory-methods.page';

describe('SupervisoryMethodsPage', () => {
  let component: SupervisoryMethodsPage;
  let fixture: ComponentFixture<SupervisoryMethodsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupervisoryMethodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
