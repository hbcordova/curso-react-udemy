export const getGifs = async (category) => {
    const apiKey = "C7EFuYdYMAy0E5wP1WJ5iRhw831Ksob8";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map(gif => 
        (
            {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            }
        )
    );

    return gifs;
}