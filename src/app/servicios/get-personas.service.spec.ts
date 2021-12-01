import { TestBed } from '@angular/core/testing';

import { GetPersonasService } from './get-personas.service';

describe('GetPersonasService', () => {
  let service: GetPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
