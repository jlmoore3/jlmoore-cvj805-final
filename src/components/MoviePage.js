import React from "react";
import MovieContext from "../context/MovieContext.js";
import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movies } = useContext(MovieContext);
  const thisMovie = useParams();

  return (
    <div className="movie-body">
      {movies
        .filter((movie) => movie.id === thisMovie.id)
        .map((MyCurrentMovie) => (
          <>
            <div className="row">
              <div className="col-md">
                <img
                  className="featured-image-full"
                  src={MyCurrentMovie.poster}
                  alt={MyCurrentMovie.yitle}
                />
              </div>
              <div className="col-md movie-detail">
                <h1 className="movie-title">{MyCurrentMovie.title}</h1>
                <h2>
                  {" "}
                  {MyCurrentMovie.year > 2999 ? (
                    <>
                      {MyCurrentMovie.year.toString().substring(0, 4)} to{" "}
                      {MyCurrentMovie.year.toString().substring(4, 8)}
                    </>
                  ) : (
                    MyCurrentMovie.year
                  )}
                </h2>
                <p>{MyCurrentMovie.plot}</p>
                <p>
                  <em>Starring:</em> {MyCurrentMovie.actors}
                </p>
                <p>
                  <em>Runtime:</em> {MyCurrentMovie.runtime} mins
                </p>
                <p>
                  <em>Rated:</em> {MyCurrentMovie.rated}
                </p>
                <div className="button-group">
                  <Nav.Link href={`/watch/${MyCurrentMovie.id}`}>
                    <Button variant="secondary">
                      Rent ${MyCurrentMovie.rentPrice}
                    </Button>
                  </Nav.Link>
                  <Nav.Link href={`/watch/${MyCurrentMovie.id}`}>
                    <Button variant="primary">
                      Buy ${MyCurrentMovie.buyPrice}
                    </Button>
                  </Nav.Link>

                  <Button
                    variant="secondary"
                    onClick={() =>
                      window.localStorage.setItem("myMovies", MyCurrentMovie.id)
                    }
                  >
                    Add to My Movies
                  </Button>
                </div>
                <ul>
                  {MyCurrentMovie.metacritic > 0 && (
                    <li className="ratings">
                      <img
                        src="/images/metacritic-logo.png"
                        alt={MyCurrentMovie.metacritic}
                      />
                      &nbsp;{MyCurrentMovie.metacritic}
                    </li>
                  )}
                  <li className="ratings">
                    <img
                      src="/images/imdb-logo.png"
                      alt={MyCurrentMovie.imdbRating}
                    />
                    &nbsp;{MyCurrentMovie.imdbRating}
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default MoviePage;
