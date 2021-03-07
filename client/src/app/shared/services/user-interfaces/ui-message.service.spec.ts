/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UIMessageService } from './ui-message.service';

describe('Service: UIMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UIMessageService]
    });
  });

  it('should ...', inject([UIMessageService], (service: UIMessageService) => {
    expect(service).toBeTruthy();
  }));
});
