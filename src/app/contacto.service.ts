import { Injectable } from '@angular/core';

// Una clase decorada con 'INjectable' se comporta como un servicio. Hace posible que pueda inyecctarse como dependencia en otras clases.
@Injectable()
export class ContactoService {

  private _contactos: string[] = [
    'Tim Cook', 
    'Elon Musk', 
    'Bill Gates',
    'Chiquito de la Calzada'
  ];

  // Obtiene una coleccion de contactos.
  obtenerContactos(): string[]{
    return this._contactos
  }

  /**
   * Elmina el contacto indicado
   */
  eliminarContacto(contacto: string): void {
    this._contactos = this._contactos.filter((c: string): boolean => {
      return c !== contacto;
    });
  }
}
