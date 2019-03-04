import { TestBed, inject } from '@angular/core/testing';
import { CountryunitService } from './countryunit.service';

describe('CountryunitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryunitService]
    });
  });

  it('should be created', inject([CountryunitService], (service: CountryunitService) => {
    expect(service).toBeTruthy();
  }));
});
