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
 
    console.log(this.state.pokemonInfo);

    return (
      <section>
        <h1>{this.state.pokemonInfo.name}</h1>
        <p>Height: {this.state.pokemonInfo.height}</p>
        <p>Weight: {this.state.pokemonInfo.weight}</p>
        <p>Experience level: {this.state.pokemonInfo.base_experience}</p>
        {this.state.pokemonInfo.sprites ? <img src={this.state.pokemonInfo.sprites.front_default} alt={`${this.state.pokemonInfo.name} visualisation`} /> : <Loader />}
      </section>
    );
  }
}
export default PokemonDetailed;
