import { getImagen } from "../../src/bases/11-await";


describe('prueba 11 await', () => { 

    test('Tiene que devolver una gift', async () => { 
        const url =  await getImagen()

        console.log(url)
        
    })
})