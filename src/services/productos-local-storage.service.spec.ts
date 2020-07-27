import { TestBed } from '@angular/core/testing';

import { ProductosLocalStorageService } from './productos-local-storage.service';

describe('ProductosLocalStorageService', () => {
  let service: ProductosLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
