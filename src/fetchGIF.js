const displayNotFound = document.getElementById('notFound');

export const fetchNew = async () => {
    const image = document.getElementById('image');
    await fetch('https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat', { mode: 'cors' })
        .then(data => { return data.json(); })
        .then(response => {
            image.src = response.data.images.original.url;
            displayNotFound.innerHTML = '';
        })
        .catch(e => {console.log(e.code + ': '  + e.message)})
}

