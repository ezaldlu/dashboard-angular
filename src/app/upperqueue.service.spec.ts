import { TestBed, inject } from '@angular/core/testing';

import { UpperqueueService } from './upperqueue.service';

describe('UpperqueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpperqueueService]
    });
  });

  it('should be created', inject([UpperqueueService], (service: UpperqueueService) => {
    expect(service).toBeTruthy();
  }));
});
