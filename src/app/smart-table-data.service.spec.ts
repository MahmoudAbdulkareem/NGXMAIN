import { TestBed } from '@angular/core/testing';

import { SmartTableDataService } from './smart-table-data.service';

describe('SmartTableDataService', () => {
  let service: SmartTableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartTableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
