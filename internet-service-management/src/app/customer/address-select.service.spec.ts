import { TestBed } from '@angular/core/testing';

import { AddressSelectService } from './address-select.service';

describe('AddressSelectService', () => {
  let service: AddressSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
