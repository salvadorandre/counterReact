const apiKey = '728ImSHnOOLGpoUF8mzcUGdkgkKCC2Rg'; 

const httpPeticion = fetch(`https://api.giphy.com/v2/emoji?api_key=${apiKey}`); 

httpPeticion
    .then( res => res.json())
    .then(({ data }) => {
        const { url } = data.images.original;
                
        const img = document.createElement('img'); 

        img.src = url; 

        document.body.appendChild(img); 
    })
    .catch(error => console.warn(error))