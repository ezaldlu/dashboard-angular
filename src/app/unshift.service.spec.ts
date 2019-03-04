import { TestBed, inject } from '@angular/core/testing';

import { UnshiftService } from './unshift.service';

describe('UnshiftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnshiftService]
    });
  });

  it('should be created', inject([UnshiftService], (service: UnshiftService) => {
    expect(service).toBeTruthy();
  }));
});
