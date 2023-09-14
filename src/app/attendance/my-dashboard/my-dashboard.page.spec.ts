import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDashboardPage } from './my-dashboard.page';

describe('MyDashboardPage', () => {
  let component: MyDashboardPage;
  let fixture: ComponentFixture<MyDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
