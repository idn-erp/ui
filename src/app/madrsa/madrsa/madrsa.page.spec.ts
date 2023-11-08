import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadrsaPage } from './madrsa.page';

describe('MadrsaPage', () => {
  let component: MadrsaPage;
  let fixture: ComponentFixture<MadrsaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MadrsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
