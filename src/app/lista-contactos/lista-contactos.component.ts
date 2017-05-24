import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // Con el decorador 'Input' exponemos un atributo al componente padre para que pueda pasarnos datos (Padre > Hijo).
  @Input() contactos: Contacto[];
  /*
   Con el decorador 'Output' exponemos un atributo al componente padre para que pueda suscribirse
   a eventos que ocurran en este componente (Hijo > Padre). Puesto que la comunicación en este
   sentido se realiza a través de eventos, este atributo debe ser un 'EventEmitter'.
   */
  @Output() alEliminarContacto: EventEmitter<Contacto>; 

  @Output() alSeleccionarContacto: EventEmitter<Contacto>; 

  constructor() { 
    // Instanciamos el 'EventEmitter'.
    this.alEliminarContacto = new EventEmitter<Contacto>();
    this.alSeleccionarContacto = new EventEmitter<Contacto>();
  }

  // Este manejador se encarga de notificar al componente padre el contacto indicado.
  notificarEliminacionContacto(contacto: Contacto): void{
    // Para notificar, basta con ejecutar la función 'emit' del atributo 'EventEmitter'.
    this.alEliminarContacto.emit(contacto)
  }

  notificarSeleccionContacto(contacto: Contacto): void{
    // Para notificar, basta con ejecutar la función 'emit' del atributo 'EventEmitter'.
    this.alSeleccionarContacto.emit(contacto)
  }

}
