import React from "react";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Dashboard = (props) => {
  const { addSaved, savedMovies, newSaved } = useContext(MovieContext);
  //   let myMoviesDisplay;
  //   localStorage.setItem(...myMovies, "");
  //   if (localStorage.getItem(myMovies)) {
  //     myMoviesDisplay = localStorage.getItem(myMovies);
  //   }
  return <div>{savedMovies}</div>;
};

export default Dashboard;
