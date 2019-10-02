import React, { Component } from "react";
import Loader from "../Loader/Loader";

class PokemonDetailed extends Component {
    state = {
      pokemonInfo: {}
    };

    componentDidMount() {
    const  { index } = this.props.match.params
     fetch(`http://pokeapi.co/api/v2/pokemon/${index}`)
      .then(response => response.json())
      .then(response => this.setState({ pokemonInfo: response }));
    }

    render() {
    const { name, height, weight, base_experience, sprites} = this.state.pokemonInfo;

    return (
      <section>
        <h1>{name}</h1>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Experience level: {base_experience}</p>
        {sprites ? <img src={sprites.front_default} alt={`${name} visualisation`} /> : <Loader />}
      </section>
    );
  }
}
export default PokemonDetailed;
