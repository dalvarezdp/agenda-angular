import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// Una clase decorada con 'Injectable' se comporta como un servicio. Hace posible que pueda inyecctarse como dependencia en otras clases.
@Injectable()
export class ContactoService {

  private _contactos: Contacto[] = [
    new Contacto('Tim Cook'), 
    new Contacto('Elon Musk'), 
    new Contacto('Bill Gates'),
    new Contacto('Chiquito de la Calzada')
  ];

  // Obtiene una coleccion de contactos.
  obtenerContactos(): Contacto[]{
    return this._contactos
  }

  /**
   * Elmina el contacto indicado
   */
  eliminarContacto(contacto: Contacto): void {
    this._contactos = this._contactos.filter((c: Contacto): boolean => {
      return c.nombre !== contacto.nombre;
    });
  }

  crearContacto(contacto: Contacto): void {
    this._contactos.push(new Contacto(contacto.nombre));
  }
}
