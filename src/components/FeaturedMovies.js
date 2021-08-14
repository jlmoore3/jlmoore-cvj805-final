import React from "react";
import { Carousel, Nav, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";

const FeaturedMovies = () => {
  const { movies } = useContext(MovieContext);
  const [index, setIndex] = useState(0);

  const FeaturedMovies = movies.filter(function (movie) {
    return movie.featured;
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} key={movies.id}>
        {FeaturedMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="features">
              <div className="featured-image">
                <img src={movie.poster} alt={`${movie.title}`} />
              </div>
              <div className="featured-text">
                <h1>{movie.title}</h1>
                <h4>
                  {movie.plot.slice(0, 140)}
                  {movie.plot.length >= 140 && `...`}
                </h4>

                <div>
                  <Nav.Link href={`/${movie.id}`}>
                    <Button variant="primary" className="carousel-btn">
                      Watch Now
                    </Button>
                  </Nav.Link>
                </div>
                <ul>
                  {/* {movie.Ratings.map((rating) => (
                    <Ratings Source={rating.Source} Value={rating.Value} />
                  ))} */}
                  {movie.metacritic > 0 && (
                    <li className="ratings">
                      <img
                        src="/images/metacritic-logo.png"
                        alt={movie.metacritic}
                      />
                      &nbsp;{movie.metacritic}
                    </li>
                  )}
                  <li className="ratings">
                    <img src="/images/imdb-logo.png" alt={movie.imdbRating} />
                    &nbsp;{movie.imdbRating}
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedMovies;
