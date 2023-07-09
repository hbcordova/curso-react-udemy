// Documentado en https://developer.mozilla.org/es/docs/Web/API/Fetch_API
// API Gratuita: https://developers.giphy.com/

const apiKey = 'C7EFuYdYMAy0E5wP1WJ5iRhw831Ksob8';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(response => response.json(response.data))
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);