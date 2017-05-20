import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  // Con el decorador 'Input' exponemos un atributo al componente padre para que pueda pasarnos datos (Padre > Hijo).
  @Input() contactos: string[];
  /*
   Con el decorador 'Output' exponemos un atributo al componente padre para que pueda suscribirse
   a eventos que ocurran en este componente (Hijo > Padre). Puesto que la comunicación en este
   sentido se realiza a través de eventos, este atributo debe ser un 'EventEmitter'.
   */
  @Output() contactoSeleccionado: EventEmitter<string>; 

  constructor() { 
    // Instanciamos el 'EventEmitter'.
    this.contactoSeleccionado = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  // Este manejador se encarga de notificar al componente padre el contacto indicado.
  notificarEliminacionContacto(contacto: string): void{
    // Para notificar, basta con ejecutar la función 'emit' del atributo 'EventEmitter'.
    this.contactoSeleccionado.emit(contacto)
  }

}
