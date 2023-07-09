const getImage = async () => {
    try {
        const apiKey = 'C7EFuYdYMAy0E5wP1WJ5iRhw831Ksob8';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(err) {
        console.warn(err);
    }
}


getImage();