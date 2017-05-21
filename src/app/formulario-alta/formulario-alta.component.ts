import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Contacto } from '../contacto';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  @Output() alCrearContacto: EventEmitter<Contacto>; 

  constructor() {
    this.alCrearContacto = new EventEmitter<Contacto>();  
  }

  ngOnInit() {
  }

  // Este manejador se encarga de notificar al componente padre el contacto indicado.
  notificarCreacionContacto(formulario: FormGroup): void{
    // Creamos un nuevo contacto a partir de los datos del formulario
    let contacto: Contacto = formulario.value as Contacto
    this.alCrearContacto.emit(contacto)
    console.log(formulario);
  }

}
