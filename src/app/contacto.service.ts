import { Injectable } from '@angular/core';

// Una clase decorada con 'INjectable' se comporta como un servicio. Hace posible que pueda inyecctarse como dependencia en otras clases.
@Injectable()
export class ContactoService {

  // Obtiene una coleccion de contactos.
  obtenerContactos(): string[]{
    return [
      'Tim Cook', 
      'Elon Musk', 
      'Bill Gates',
      'Chiquito de la Calzada'
    ];
  }
}
