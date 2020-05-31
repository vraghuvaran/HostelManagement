import { TestBed } from '@angular/core/testing';

import { BlockinfoService } from './blockinfo.service';

describe('BlockinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockinfoService = TestBed.get(BlockinfoService);
    expect(service).toBeTruthy();
  });
});
