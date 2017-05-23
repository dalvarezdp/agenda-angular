import { InjectionToken, ValueProvider } from '@angular/core';


// Para hacer una inyeccion de un valor, necesitamos crear un token. No debemos usar como token un string.
export const ApiUrl: InjectionToken<string> = new InjectionToken<string>('ApiUrl');

// Además, necesitamos crear un ValueProvider y registrarlo en el módulo.
export const ApiUrlProvider: ValueProvider = {
    provide: ApiUrl,
    useValue: 'http://localhost:3004'
};