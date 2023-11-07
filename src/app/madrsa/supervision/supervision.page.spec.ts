import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupervisionPage } from './supervision.page';

describe('SupervisionPage', () => {
  let component: SupervisionPage;
  let fixture: ComponentFixture<SupervisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupervisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
