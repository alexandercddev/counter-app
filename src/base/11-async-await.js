

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {

    try { 
        const apiKey = 'W2RdMZWFWGb4TW5eGSZ9IL0LbUClW9su';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original; 
        return url;
    } catch (error) {
        return 'No existe';
    } 
}
 