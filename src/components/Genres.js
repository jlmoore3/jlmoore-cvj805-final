import React from "react";
import { useState, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import Movie from "./Movie.js";

const Genres = () => {
  const [genreMovies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/movies/genre?genre=${genre}`)
      .then((Data) => {
        return Data.json();
      })
      .then((json) => {
        console.log(json);
        setMovies(json.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);
  const setGenreClick = (event) => {
    alert(`Getting by genre: ${event.target.value}`);
    setGenre(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="genres col-sm-2">
          <Button className="genre-btn" value="comedy" onClick={setGenreClick}>
            Comedy
          </Button>
        </div>
        <div className="genres col-sm-2">
          <Button className="genre-btn" value="drama" onClick={setGenreClick}>
            Drama
          </Button>
        </div>
        <div className="genres col-sm-2">
          <Button
            className="genre-btn"
            value="thriller"
            onClick={setGenreClick}
          >
            Thriller
          </Button>
        </div>
        <div className="genres col-sm-2">
          <Button
            className="genre-btn"
            value="adventure"
            onClick={setGenreClick}
          >
            Adventure
          </Button>
        </div>
        <div className="genres col-sm-2">
          <Button className="genre-btn" value="romance" onClick={setGenreClick}>
            Romance
          </Button>
        </div>
        <div className="row">
          {genreMovies.map((movie) => (
            <>
              <Movie
                id={movie.id}
                key={movie.id}
                title={movie.title}
                description={movie.plot}
                poster={movie.poster}
                genre={movie.genre}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
