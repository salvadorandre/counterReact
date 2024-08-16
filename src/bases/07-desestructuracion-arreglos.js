

const personajes = ['goku', 'Vegeta', 'Trunks']; 

const [ , , p3] = personajes; 


console.log(p3)


const retornaArreglo = () => { 
    return [
        'ABC', 
        123
    ]
}


const [ p1, p2 ] = retornaArreglo()


console.log(p1, p2); 



const use = ( valor ) => {
    return [
        valor,
        () => { 
            console.log('hola mundo')
        }
    ]
}


const [ val, setVal ] = use('andre'); 


setVal(); 
console.log(val); 