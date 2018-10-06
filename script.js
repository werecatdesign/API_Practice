document.addEventListener('DOMContentLoaded', function() {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        data.forEach (movie => {
            console.log (movie.title);
            console.log (movie.release_date);
            
            const moviebox = document.createElement('div'); // creating a textbox for each movie
            moviebox.setAttribute('class', 'moviebox'); // creating a class for each movie textbox
            if (movie.release_date < 1990) {
                moviebox.setAttribute('style', 'background-color: #0B6121');
            } else if (movie.release_date >= 1990 && movie.release_date < 2000) {
                moviebox.setAttribute('style', 'background-color: #8A0829');
            } else if (movie.release_date >= 2000 && movie.release_date < 2010) {
                moviebox.setAttribute('style', 'background-color: #F3F781');
            } else {
                moviebox.setAttribute('style', 'background-color: #FACC2E');
            }
            const container = document.querySelector('.container'); // selecting the container div from the HTML doc
            container.appendChild(moviebox); // appending the movie textboxes to the container
            
            const h1 = document.createElement('h1'); // creating a heading for each movie textbox
            h1.textContent = movie.title; // defining the content of the heading as the respective movie title
            moviebox.appendChild(h1);
            
            const paragraph = document.createElement('p'); // creating a paragraph for the Release Year info
            paragraph.textContent = "Release Year: " + movie.release_date;
            moviebox.appendChild(paragraph);
        });               
    };
    request.send();
    
});
    