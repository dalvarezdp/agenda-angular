import { TestBed, inject } from '@angular/core/testing';

import { ContactoService } from './contacto.service';

xdescribe('ContactoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactoService]
    });
  });

  it('should be created', inject([ContactoService], (service: ContactoService) => {
    expect(service).toBeTruthy();
  }));
});
