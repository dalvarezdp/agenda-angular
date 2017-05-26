import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'

import { Contacto } from './contacto';
import { ApiUrl } from './configuracion'

// Una clase decorada con 'Injectable' se comporta como un servicio. Hace posible que pueda inyecctarse como dependencia en otras clases.
@Injectable()
export class ContactoService {

  constructor(private _http: Http,
              @Inject(ApiUrl) private apiUrl){}

  // Para poder hacer peticiones HTTP necesitamos el cliente correspondiente. Tenemos que inyectarlo como dependencia para usarlo en el servicio.
  obtenerContactos(): Observable<Contacto[]>{
    //return this._contactos
    return this._http
                .get(`${this.apiUrl}/contactos`)
                /**
                 * Con el operador maps, transformamos el 'Observable<Response>' que retorna la funcion 'get' en un
                 * 'Observable<Contacto[]>' que es lo que realmente necesitamos.
                 */
                .map((respuesta: Response) => {
                  // Recogemos la colección de objetos JSON de la respuesta y le
                  // damos comportamiento de 'colección de cualquier cosa'.
                  let contactosEnRespuesta: any[] = respuesta.json() as any[];
                  // Iteramos por la colección de objetos JSON y vamos instanciando
                  // objetos de tipo 'Contacto' por cada uno de ellos.
                    return contactosEnRespuesta.map((datos: any) => {
                      return Contacto.nuevoDesdeJson(datos);
                    });
                });  
  }

  /**
   * Elmina el contacto indicado
   */
  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._http
                .delete(`${this.apiUrl}/contactos/${contacto.id}`)
                .map(() => {
                  return contacto;
                });
  }

  crearContacto(contacto: Contacto): Observable<Contacto> {
    return this._http
                .post(`${this.apiUrl}/contactos`, contacto)
                .map((respuesta: Response) => {
                  return Contacto.nuevoDesdeJson(respuesta.json());
                });
  }
}
