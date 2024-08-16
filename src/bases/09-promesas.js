//promesas en js 
import { getHeroeById } from "../bases/08-import-exp";
import { getHeroeByOwner } from "../bases/08-import-exp";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {

        const heroe = getHeroeById(2); 
    
        if(heroe) { 
            resolve(heroe)
        }
        else { 
            reject('no se encontro el personaje')
        }


    }, 2000);
}); 

promesa.then( (heroe) => {
    console.log('heroe: ', heroe)
})
.catch(err => console.error(err))


const getHeroeByAsync  = ( id ) => { 
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

getHeroeByAsync(10)
    .then(( heroe ) => { 
        console.log('heroe: ', heroe)   
    })
    .catch(error => console.warn(error))




