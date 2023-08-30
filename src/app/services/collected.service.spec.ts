import { TestBed } from '@angular/core/testing';

import { CollectedService } from './collected.service';

describe('CollectedService', () => {
  let service: CollectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
