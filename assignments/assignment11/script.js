const getMovies = async () => {
    const url =
      "https://portiaportia.github.io/json/movies.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies");
    movies.forEach((movie) =>
      moviesSection.append(getMovie(movie))
    );
  };
  
  const getMovie = (movie) => {
    let section = document.createElement("section");
    section.classList.add("movie");
  
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    section.append(h3);

    let p1 = document.createElement("p");
    p1.innerText = "Director: " + movie.director;
    section.append(p1);

    let p2 = document.createElement("p");
    p2.innerText = "Actors: " + movie.actors;
    section.append(p2);

    let p3 = document.createElement("p");
    p3.innerText = "Year Released: " + movie.year;
    section.append(p3);

    let p4 = document.createElement("p");
    p4.innerText = "Genres: " + movie.genres;
    section.append(p4);

    let p5 = document.createElement("p");
    p5.innerText = movie.description;
    section.append(p5);
  
    let img = document.createElement("img");
    section.append(img);
    img.src = movie.img;
  
    return section;
  };
  
  window.onload = () => showMovies();