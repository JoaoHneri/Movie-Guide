const input = document.querySelector('#search-input');
const btn = document.querySelector('#search-btn');
const results = document.querySelector('#results');

const apiKey = '602079bb';

let viewMovie = () =>{
    let movie = input.value;
    let url = `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    if(movie.length <= 0){
       results.innerHTML = `<h3 id="empt">Digite um filme Válido</h3>`;
    }
    else{
        fetch(url).then((res)=>res.json()).then((data)=>{
            if(data.Response == 'False'){
                results.innerHTML = `<h3> O Filme: ${movie} não foi encontrado </h3>`;
            } else{
                console.log(data);
                results.innerHTML = `
                <div class="info">
                <img src="${data.Poster} class="poster">
                <div>
                        <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                         <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
                <h3>Sinópse:</h3>
                <p>${data.Plot}</p>
                <h3>Elenco:</h3>
                <p>${data.Actors}</p>
                `
            }
        })
    }
}

btn.addEventListener('click', viewMovie);
