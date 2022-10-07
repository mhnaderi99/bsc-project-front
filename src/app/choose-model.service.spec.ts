import { TestBed } from '@angular/core/testing';

import { ChooseModelService } from './choose-model.service';

describe('ChooseModelService', () => {
  let service: ChooseModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
