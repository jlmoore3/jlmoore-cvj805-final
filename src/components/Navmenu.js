import React from "react";
import logo from "../logo.svg";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

const Navmenu = (props) => {
  let userHack = window.sessionStorage.getItem("loggedIn");
  return (
    <>
      <Navbar className="navbar nobr">
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/genres">Genres</Nav.Link>
          <Nav.Link href={`/films`}>Films</Nav.Link>
          <Nav.Link href={`/tv`}>TV Shows</Nav.Link>
          <Nav.Link href="/dashboard">My Movies</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
        <div className="search-bar">
          <>
            <Form action="/" method="get">
              <FormControl
                type="text"
                id="nav-search"
                placeholder="Search Movies"
                name="search"
              />
              <Button type="submit">Go!</Button>
            </Form>
            {userHack && (
              <button
                className="btn btn-secondary logout"
                type="submit"
                onClick={() => window.sessionStorage.setItem("loggedIn", false)}
              >
                Logout
              </button>
            )}
          </>
        </div>
      </Navbar>
    </>
  );
};

export default Navmenu;
