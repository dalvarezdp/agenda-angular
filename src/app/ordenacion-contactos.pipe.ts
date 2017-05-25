import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto'

@Pipe({
  name: 'OrdenacionContactos'
})
export class OrdenacionContactosPipe implements PipeTransform {

  transform(contactos: Contacto[], ascendente: boolean): Contacto[] {

    let polaridadContactoAContactoB: number = ascendente ? 1 : -1;
    let polaridadContactoBContactoA: number = ascendente ? -1 : 1;

    if (contactos && contactos.length > 1){
        return contactos.sort((a: Contacto, b: Contacto): number => {
        let orden: number;

        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()){
          orden = polaridadContactoAContactoB;
        } else if (a.nombre.toLowerCase() < b.nombre.toLowerCase()){
          orden = polaridadContactoBContactoA;
        } else {
          orden = 0;
        }

        return orden;
      })
    } else {
      return [];
    }
  }

}
