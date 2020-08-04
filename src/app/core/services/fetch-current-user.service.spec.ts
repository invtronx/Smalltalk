import { TestBed } from '@angular/core/testing';

import { FetchCurrentUserService } from './fetch-current-user.service';

describe('FetchCurrentUserService', () => {
  let service: FetchCurrentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCurrentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
