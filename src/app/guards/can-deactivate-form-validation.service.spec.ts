import { TestBed } from '@angular/core/testing';

import { CanDeactivateFormValidationService } from './can-deactivate-form-validation.service';

describe('CanDeactivateFormValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanDeactivateFormValidationService = TestBed.get(CanDeactivateFormValidationService);
    expect(service).toBeTruthy();
  });
});
