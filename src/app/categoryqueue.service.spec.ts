import { TestBed, inject } from '@angular/core/testing';

import { CategoryqueueService } from './categoryqueue.service';

describe('CategoryqueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryqueueService]
    });
  });

  it('should be created', inject([CategoryqueueService], (service: CategoryqueueService) => {
    expect(service).toBeTruthy();
  }));
});
