import { getSaludo } from "../../src/bases/02-template-string";


describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar "Hola mundo"', ()=> { 

        const message = getSaludo()

        expect( message ).toBe('Hola Mundo'); 

    }); 
    
}); 