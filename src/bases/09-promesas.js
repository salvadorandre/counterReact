//promesas en js 
import { getHeroeById } from "../bases/08-import-exp";

export const getHeroeByAsync  = ( id ) => { 
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
    
            const heroe = getHeroeById( id ); 
        
            if(heroe) { 
                resolve(heroe)
            }
            else { 
                reject('no se encontro el personaje')
            }
    
        }, 2000);
    }); 

    return promesa
}



