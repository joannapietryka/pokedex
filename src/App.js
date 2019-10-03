import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import PokemonsList from "./components/PokemonsList/PokemonsList";
import PokemonDetailed from "./components/PokemonDetailed/PokemonDetailed";

const GlobalStyle = createGlobalStyle`
    body {
      background-image: linear-gradient(to right top, #faf09c, #bceea6, #7de6c1, #47d9dd, #46c7ef, #72bbf7, #9fadf0, #c39edc, #e498c6, #f598aa, #f79f8e, #ebac7a);
      min-height: 100vh;
      font-family: "Trebuchet MS";
      color: #040b45;
    }
  `;

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Route path="/dashboard" component={PokemonsList} />
        <Route path="/details/:id" component={PokemonDetailed} />
      </Router>
    );
  }
}

export default App;
