import { TestBed } from '@angular/core/testing';

import { ChunkDetailResolverService } from './chunk-detail-resolver.service';

describe('ChunkDetailResolverService', () => {
  let service: ChunkDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChunkDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
