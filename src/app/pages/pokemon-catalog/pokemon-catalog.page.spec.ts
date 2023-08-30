import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPage } from './pokemon-catalog.page';

describe('CatalogPage', () => {
  let component: CatalogPage;
  let fixture: ComponentFixture<CatalogPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogPage]
    });
    fixture = TestBed.createComponent(CatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
