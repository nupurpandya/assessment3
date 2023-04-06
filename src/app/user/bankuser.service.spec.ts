import { TestBed } from '@angular/core/testing';

import { BankuserService } from './bankuser.service';

describe('BankuserService', () => {
  let service: BankuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
