import React, { Component } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `

const PokemonDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;;
    background: #fff;
    width: 70%;
  `
const Image = styled.div`

`

const Info = styled.div`

`

class PokemonDetailed extends Component {
    state = {
      pokemonInfo: {}
    };

    componentDidMount() {
      const  { index } = this.props.match.params
       fetch(`http://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response => response.json())
        .then(pokemonInfo => this.setState({ pokemonInfo }));
    }

    render() {
      const { pokemonInfo: {name, height, weight, base_experience, sprites} } = this.state;

    return (
      <Section>
        <PokemonDetails>
          <Info>
            <h1>{name}</h1>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Experience level: {base_experience}</p>
          </Info>
          <Image>
            {sprites ? <img src={sprites.front_default} alt={`${name} visualisation`} /> : <Loader />}
          </Image>
        </PokemonDetails>
      </Section>
    );
  }
}
export default PokemonDetailed;
