import  heroes  from "../data/heroes";



export const getHeroeById = ( idElement ) => { 
    return heroes.find( ( heroe ) => heroe.id === idElement)
}

export const getHeroeByOwner = ( owner ) => { 
    return heroes.filter( (heroe) => heroe.owner === owner)
}

