import { TestBed } from '@angular/core/testing';

import { ComposureResolverService } from './composure-resolver.service';

describe('ComposureResolverService', () => {
  let service: ComposureResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposureResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
