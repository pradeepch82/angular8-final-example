import { TestBed, async, inject } from '@angular/core/testing';

import { MultiGuardGuard } from './multi-guard.guard';

describe('MultiGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiGuardGuard]
    });
  });

  it('should ...', inject([MultiGuardGuard], (guard: MultiGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
