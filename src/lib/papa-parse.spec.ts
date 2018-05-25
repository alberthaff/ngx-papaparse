import { TestBed, inject } from '@angular/core/testing';

import { PapaParse } from './papa-parse';

describe('Papaparse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PapaParse]
    });
  });

  it('should be created', inject([PapaParse], (service: PapaParse) => {
    expect(service).toBeTruthy();
  }));
});
