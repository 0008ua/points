import { TestBed } from '@angular/core/testing';

import { DeactivateRouteGuard } from './deactivate-route.guard';

describe('DeactivateRouteGuard', () => {
  let guard: DeactivateRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
