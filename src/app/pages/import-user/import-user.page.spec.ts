import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportUserPage } from './import-user.page';

describe('ImportUserPage', () => {
  let component: ImportUserPage;
  let fixture: ComponentFixture<ImportUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImportUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
