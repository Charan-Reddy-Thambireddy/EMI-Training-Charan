import { TestBed } from '@angular/core/testing';

import { EmsGuard } from './ems.guard';

describe('EmsGuard', () => {
  let guard: EmsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
