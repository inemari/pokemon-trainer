import { TestBed } from '@angular/core/testing';

import { PokemonCatalogService } from './pokemon-catalog.service';

describe('PokemonCatalogService', () => {
  let service: PokemonCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
