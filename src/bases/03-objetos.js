const persona = {
    nombre: 'Andre', 
    apellido: 'Salvador', 
    edad: 18,
    direccion: { 
        ciudad: 'Comitancillo', 
        zip: 232345544, 
        lat: 15.9989989, 
        lng: 35.97988888
    }
}

const persona2 = {...persona, nombre: 'Eben', apellido: 'Nolasco'}; 


console.log(persona)
console.log(persona2)