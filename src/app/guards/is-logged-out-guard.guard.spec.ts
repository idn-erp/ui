import { TestBed } from '@angular/core/testing';

import { IsLoggedOutGuardGuard } from './is-logged-out-guard.guard';

describe('IsLoggedOutGuardGuard', () => {
  let guard: IsLoggedOutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedOutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
