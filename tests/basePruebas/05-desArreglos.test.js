import { retornaArreglo } from "../../src/bases/07-desestructuracion-arreglos"

describe('desestructuracion de arreglos', () => {

    test('tiene que desestructurar el arreglo', () =>{ 

        const [letters, numbers] = retornaArreglo(); 

        expect( letters ).toBe('ABC'); 
        expect( numbers ).toBe( 123 ); 

        
    })
})