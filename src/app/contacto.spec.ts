import { Contacto } from './contacto';

// Con bloques 'describe' agrupamos baterías de tests.
describe('Tests de la clase Contacto', () => {

  let contacto: Contacto;

  // Con los bloques 'beforeEach' ejecutamos código previo a cada bloque 'it'.
  beforeEach(() => {
    contacto = new Contacto('John Doe');
    contacto.facebook = 'JohnDoe';
    contacto.twitter = '@JohnDoe';
  });

  // Cada bloque 'it' define un test.
  it('Debería obtener la ruta correcta al perfil de Facebook de un contacto dado', () => {
    let rutaFacebook = contacto.obtenerRutaFacebook();
    // En 'expect' indicamos qué es lo que esperamos obtener con este test.
    expect(rutaFacebook).toBe('https://www.facebook.com/JohnDoe');
  });

  it('Debería obtener la ruta correcta al perfil de Twitter de un contacto dado', () => {
    let rutaTwitter = contacto.obtenerRutaTwitter();
    expect(rutaTwitter).toBe('https://twitter.com/@JohnDoe');
  });

});