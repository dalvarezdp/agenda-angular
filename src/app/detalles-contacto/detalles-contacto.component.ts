import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contacto } from '../contacto'

@Component({
  selector: 'detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;
  @Output() alPulsarFacebook: EventEmitter<Contacto>;
  @Output() alPulsarTwitter: EventEmitter<Contacto>;

  constructor() {
    this.alPulsarFacebook = new EventEmitter<Contacto>();
    this.alPulsarTwitter = new EventEmitter<Contacto>();
  }

  // Notificamos la pulsación sobre el botón 'Facebook'.
  notificarFacebook(): void {
    this.alPulsarFacebook.emit(this.contacto);
  }

  // Notificamos la pulsación sobre el botón 'Twitter'.
  notificarTwitter(): void {
    this.alPulsarTwitter.emit(this.contacto);
  }

}
