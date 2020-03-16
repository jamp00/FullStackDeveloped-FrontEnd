import { TestBed } from '@angular/core/testing';

import { HacherNewsService } from './hacher-news.service';

describe('HacherNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HacherNewsService = TestBed.get(HacherNewsService);
    expect(service).toBeTruthy();
  });
});
