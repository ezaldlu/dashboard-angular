import { TestBed, inject } from '@angular/core/testing';

import { CategorynewService } from './categorynew.service';

describe('CategorynewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorynewService]
    });
  });

  it('should be created', inject([CategorynewService], (service: CategorynewService) => {
    expect(service).toBeTruthy();
  }));
});
