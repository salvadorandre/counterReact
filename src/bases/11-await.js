

const getImagen = async () => { 
    const apiKey = '728ImSHnOOLGpoUF8mzcUGdkgkKCC2Rg'; 
    const httpPeticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); 
    const { data } = await httpPeticion.json()

    const { url } = data.images.original; 

    const img = document.createElement('img'); 

    img.src = url; 
    
    document.body.appendChild(img)
}

getImagen()

