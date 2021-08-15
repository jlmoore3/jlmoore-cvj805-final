import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/films/")
      .then((allFilmData) => {
        console.log(allFilmData.body);
        return allFilmData.json();
      })
      .then((json) => {
        setFilms(json.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <>
      <h2>Feature Films</h2>
      <div className="row">
        {films.map((movie) => (
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
    </>
  );
};

export default Films;
