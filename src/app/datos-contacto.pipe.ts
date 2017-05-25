import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto';

// Los pipes son clases decoradas con 'Pipe'. Se necesita indicar el metadato 'name', puesto
// que es el que se especifica en un template para usar el pipe. Además, tenemos que implementar
// en el pipe la interfaz 'PipeTransform'.
@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  // La función 'transform' es de obligada implementación. Siempre recibe (al menos) un
  // parámetro, que es precisamente el que sufre la transformación.
  transform(contacto: Contacto, separador: string = "|"): string {
    let datos: string;
    if (contacto.movil && contacto.email) {
      datos = `${contacto.movil} ${separador} ${contacto.email}`;
    } else if (contacto.movil) {
      datos = contacto.movil;
    } else if (contacto.email) {
      datos = contacto.email;
    }
    return datos;
  }

}
