import "../App.css";
import Movies from "./Movies.js";
import MoviePage from "./MoviePage.js";
import Navmenu from "./Navmenu.js";
import Genres from "./Genres.js";
import Footer from "./Footer.js";
import Login from "./Login";
import Register from "./Register";
import FeaturedMovies from "./FeaturedMovies";
import MovieContext from "../context/MovieContext.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  // TODO - set up flat json files for backup data calls to put inside catch. Leaving this out because we are specifically testing API
  // const MoviesFlat = fetch("http://localhost:5000/movies")
  //   .then((allMovieData) => {
  //     return allMovieData.json();
  //   })
  //   .then((json) => {
  //     console.log(json.body);
  //     setMovies(json.body);
  //   })
  //   .catch((err) => {
  //     console.log(`Error ${err}`);
  //   });
  // const UsersFlat = fetch("http://localhost:5000/users")
  //   .then((allUserData) => {
  //     return allUserData.json();
  //   })
  //   .then((json) => {
  //     console.log(json.body);
  //     setUsers(json.body);
  //   })
  //   .catch((err) => {
  //     console.log(`Error ${err}`);
  //   });

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((allMovieData) => {
        return allMovieData.json();
      })
      .then((json) => {
        //console.log(json.body);
        setMovies(json.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
    fetch("http://localhost:5000/users")
      .then((allUserData) => {
        return allUserData.json();
      })
      .then((json) => {
        //console.log(json.body);
        setUsers(json.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  // console.log(`all users: ${users}`);
  // console.log(`all movies: ${movies}`);

  let userHack = window.sessionStorage.getItem("loggedIn");

  const [savedMovies, setSaved] = useState([]);
  const addSaved = (newSaved) => {
    localStorage.setItem("saved", JSON.stringify([...savedMovies, newSaved]));
    setSaved([...savedMovies, newSaved]);
    console.log(`Faves: ${savedMovies}`);
  };

  return (
    <div className="App">
      <MovieContext.Provider value={{ movies, setMovies, savedMovies }}>
        <Router>
          <Switch>
            <header>
              <div className="header-fw">
                <Navmenu setUser={setUser} user={user} />
                {!userHack && <Login user={user} setUser={setUser} />}
              </div>
            </header>
          </Switch>

          <Switch>
            <div>
              <Route exact path="/">
                {userHack && <FeaturedMovies setUser={setUser} />}
                <Movies addSaved={addSaved} />
              </Route>

              <Route path="/register" component={Register} />
              <Route path="/genres" component={Genres} />
              <Route path="/:id" component={MoviePage} />
              <Route path="/?search" component={Movies} />
            </div>
          </Switch>

          <Switch>
            <Route path="/" component={Footer} />
          </Switch>
        </Router>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
