/**
 * Creamos una clase Contacto con los atributos propios del este tipo de entidad
 */
export class Contacto {

    public id: number;

    /**
     * La '?' nos permite que el valor sea opcional en el constructor
     */
    constructor(
        public nombre: string,
        public email?: string,
        public movil?: string,
        public facebook?: string,
        public twitter?: string){}
   
}



