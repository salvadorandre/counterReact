import { getUser, getUsuarioActivo } from "../../src/bases/05-funciones";


describe('probar funciones 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const testUser = { 
            uid: 'ABCD345', 
            username: 'EL_PAPITOO'
        }

        const getUserTest = getUser()

        expect( testUser ).toStrictEqual( getUserTest )
    }); 

    test('getUsuarioActivo debe de retornar tambien un objeto', () => {
        const name = 'Andre'
         
        const objectPerson = { 
            uid: 'ABC4577', 
            username: name
        }

        const userActive = getUsuarioActivo('Andre')

        expect( objectPerson ).toStrictEqual( userActive )
    }); 
})