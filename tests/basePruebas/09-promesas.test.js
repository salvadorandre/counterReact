import { getHeroeByAsync } from "../../src/bases/09-promesas";


describe('Pruebas con asincronia', () => { 

    test('getHeroesByAsync debe de retornar un heroe', (done) => { 
        const id = 1; 
        getHeroeByAsync(id).then( hero => { 
            expect(hero).toBe({
                id: 1, 
                name: 'Batman', 
                owner: 'DC' 
            })
        }); 
    });
}); 