import { TestBed, inject } from '@angular/core/testing';

import { IndicatorService } from './indicator.service';

describe('IndicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorService]
    });
  });

  it('should be created', inject([IndicatorService], (service: IndicatorService) => {
    expect(service).toBeTruthy();
  }));
});
