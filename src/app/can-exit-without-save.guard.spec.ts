import { TestBed } from '@angular/core/testing';

import { CanExitWithoutSaveGuard } from './can-exit-without-save.guard';

describe('CanExitWithoutSaveGuard', () => {
  let guard: CanExitWithoutSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanExitWithoutSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
