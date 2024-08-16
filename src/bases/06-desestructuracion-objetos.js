//Desestructuracion 
//asignacion desestruturante 

const persona = {
    nombre: 'Andre', 
    apellido: 'Salvador', 
    clave: 'PAPU'
}

const { nombre, apellido, clave } = persona

console.log(nombre, apellido, clave);   


const retornaPersona = ( usuario ) => { 
    const  {nombre, apellido, clave} = usuario; 

    console.log(nombre, apellido, persona, clave)
}; 

console.log(retornaPersona(persona))