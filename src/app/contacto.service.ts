import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'

import { Contacto } from './contacto';


// Una clase decorada con 'Injectable' se comporta como un servicio. Hace posible que pueda inyecctarse como dependencia en otras clases.
@Injectable()
export class ContactoService {

  constructor(private _http: Http){}

  // Para poder hacer peticiones HTTP necesitamos el cliente correspondiente. Tenemos que inyectarlo como dependencia para usarlo en el servicio.
  obtenerContactos(): Observable<Contacto[]>{
    //return this._contactos
    return this._http
                .get('http://localhost:3004/contactos')
                /**
                 * Con el operador maps, transformamos el 'Observable<Response>' que retorna la funcion 'get' en un
                 * 'Observable<Contacto[]>' que es lo que realmente necesitamos.
                 */
                .map((respuesta: Response) => {
                  return respuesta.json() as Contacto[];
                });  
  }

  /**
   * Elmina el contacto indicado
   */
  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._http
                .delete(`http://localhost:3004/contactos/${contacto.id}`)
                .map(() => {
                  return contacto;
                });
  }

  crearContacto(contacto: Contacto): Observable<Contacto> {
    return this._http
                .post('http://localhost:3004/contactos', contacto)
                .map((respuesta: Response) => {
                  return respuesta.json() as Contacto;
                });
  }
}
