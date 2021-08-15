import React from "react";
import Movie from "./Movie.js";
import Genres from "./Genres.js";
import MovieContext from "../context/MovieContext.js";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Movies = (props) => {
  const { movies } = useContext(MovieContext);
  const { search } = useLocation();
  const keyword = queryString.parse(search);
  let thisKeyword = "";
  if (keyword.search) {
    thisKeyword = keyword.search.toLowerCase();
  }
  let results = false;
  const mapMovies = movies.map((movie) => (
    <>
      <Movie
        id={movie.id}
        key={movie.id}
        title={movie.title}
        description={movie.plot}
        poster={movie.poster}
        genre={movie.genre}
        addSaved={props.addSaved}
      />
    </>
  ));

  const filterMovies = movies
    .filter((movie) =>
      JSON.stringify(movie).toString().toLowerCase().includes(thisKeyword)
    )
    .map((movie) => (
      <>
        {(results = true)}
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          description={movie.plot}
          poster={movie.poster}
          genre={movie.genre}
          addSaved={props.addSaved}
        />
      </>
    ));

  return (
    <>
      {keyword.search && (
        <>
          <br />
          <h2>
            Search results for <em>{keyword.search}</em>
          </h2>
        </>
      )}
      <div className="row">
        {!thisKeyword && mapMovies}
        {thisKeyword && filterMovies}
        {!results && (
          <div className="container">
            <h1>No results</h1>
            <p>Browse by Genre:</p>
            <Genres />
          </div>
        )}
        {!movies &
        (
          <>
            Please ensure the Java Spring Boot API is running on localhost:5000
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
