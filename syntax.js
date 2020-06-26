// making an function to make ajax request
// to do so we will use the fetch function which can be used to make request to any end point
// https://rallycoding.herokuapp.com/api/music_albums
// we will be fetching from this url
function fetchAlbums(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums') // fetch will return a promise and every time we deal with a promise .then is used to get callback or to ensure promise is resolved
    .then(res => res.json()) //we get get json data through this
    .then(json => console.log(json));// now since we have the data in json we can do whatever we want
}
fetchAlbums();

// Run this on browser inspect element->console->paste this->run

// Change with new syntax
//  write async beside function declartion ans await before promises
async fetchAlbums(){
    const res= await fetch('https://rallycoding.herokuapp.com/api/music_albums')// assign it to a varaible
    const json= await res.json()
    console.log(json);
}