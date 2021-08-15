import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const Tv = () => {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tv/")
      .then((allTvData) => {
        console.log(allTvData.body);
        return allTvData.json();
      })
      .then((json) => {
        setTv(json.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <>
      <h2>Television Series</h2>
      <div className="row">
        {tv.map((movie) => (
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

export default Tv;
