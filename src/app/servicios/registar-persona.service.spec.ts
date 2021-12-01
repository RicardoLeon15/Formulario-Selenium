import { TestBed } from '@angular/core/testing';

import { RegistarPersonaService } from './registar-persona.service';

describe('RegistarPersonaService', () => {
  let service: RegistarPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistarPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
