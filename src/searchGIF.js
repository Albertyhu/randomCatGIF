export const fetchNew = async () => {
    const image = document.getElementById('image');
    await fetch('https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat', { mode: 'cors' })
        .then(data => { return data.json(); })
        .then(response => {
            image.src = response.data.images.original.url;
        })
        .catch(e => { console.log(e.code + ': ' + e.message) })
}

const searchField = document.getElementById('searchField'); 

const searchButton = document.getElementById('searchButton');
const displayNotFound = document.getElementById('notFound'); 

export const handleSearch = async () => {
    const image = document.getElementById('image');
    var userQuery = searchField.value; 
    var query = 'https://api.giphy.com/v1/gifs/search?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&q=' + userQuery.toString(); 
    //var query = 'https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=' + userQuery.toString(); 

    try {
       
    //    await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat&q=${query}`, { mode: 'cors' })
        await fetch(query, { mode: 'cors' })
            .then(data => { return data.json(); })
            .then(response => {
                //image.src = response.data.images.original.url;
                //console.log(response)
                let url = findImage(userQuery, response.data)
                console.log(response.data)
                if (url != '') {
                    image.src = url;
                    displayNotFound.innerHTML = '';
                }
                else {
                    image.src = 'https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif'
                    displayNotFound.innerHTML = 'Your search result turned up nothing'; 
                }
                    
            })
            .catch(e => { console.log(e.code + ': ' + e.message)})
    }
    catch (e) {
        console.log(e.code + ': ' + e.message)
    }
}

var event = new Event('input')

searchButton.addEventListener('click', () => { handleSearch() })
//searchField.dispatchEvent(event);

function findImage(query, array) {
    var image = '';
    array.forEach(item => {
        if (item.title.toLowerCase().indexOf(query.toLowerCase()) != -1) {
            image = item.images.original.url; 
        }
    })
    return image; 
}
