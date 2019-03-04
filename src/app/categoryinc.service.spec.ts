import { TestBed, inject } from '@angular/core/testing';

import { CategoryincService } from './categoryinc.service';

describe('CategoryincService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryincService]
    });
  });

  it('should be created', inject([CategoryincService], (service: CategoryincService) => {
    expect(service).toBeTruthy();
  }));
});
