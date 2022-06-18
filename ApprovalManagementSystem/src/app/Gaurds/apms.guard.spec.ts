import { TestBed } from '@angular/core/testing';

import { ApmsGuard } from './apms.guard';

describe('ApmsGuard', () => {
  let guard: ApmsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApmsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
