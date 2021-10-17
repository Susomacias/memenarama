import "./reset.min.css";
import "./App.css";
import "./Navbar.css";
import React, { useEffect } from "react";
import ImageMakerTool from "./ImageMakerTool/ImageMakerTool";
import { Galery } from "./galery/galery";
import { ImageUpload } from "./ImageUpload/ImageUpload";
import { LoginButton } from "./login";
import { LogoutButton } from "./logout";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!user) {
    return (
      <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Link to="/"> <strong>MENENARAMA</strong> </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link">
                    Login para comenzar a crear tus memes
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <div className="bd-highlight">
                <button type="button" className="btn btn-primary m-2"><LoginButton></LoginButton></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Galery></Galery>
      </Router>
    );
  }

  return (
    isAuthenticated && (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Link to="/"> <strong>MENENARAMA</strong> </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/crear-meme">
                      <strong>Crear Meme</strong>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                      <strong>|</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/publicar-meme">
                      <strong>Publicar Meme</strong>
                    </Link>
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <div className="bd-highlight m-1">{user.name}</div>
                <div className="bd-highlight">
                  <img id="userImg" src={user.picture} alt={user.name} />
                </div>
                <div className="bd-highlight">
                <button type="button" className="btn btn-primary m-2"><LogoutButton></LogoutButton></button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/crear-meme">
            <CrearMeme />
          </Route>
          <Route path="/publicar-meme">
            <ImageUpload />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    )
  );
}

function Main() {
  return <Galery></Galery>;
}

function CrearMeme() {
  return <ImageMakerTool></ImageMakerTool>;
}

function PublicarMeme() {
  return <ImageUpload></ImageUpload>;
}
