import React, { Component } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import BackButton from "../BackButton/BackButton";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    h1 {
      text-transform: capitalize;
      font-size: 2.3em;
    }
  `

const PokemonDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;;
    background: #73e4c6;
    width: 60%;
  `
const Image = styled.div`
    transform: scale(1.5);
    padding: 2em;
`

const Info = styled.div`
    padding: 2em;
    span {
      font-weight: bold;
    }
   
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
        <BackButton/>
        <h1>{name}</h1>
        <PokemonDetails>
          <Info>
            <p>Height: <span>{height}</span></p>
            <p>Weight: <span>{weight}</span></p>
            <p>Experience level: <span>{base_experience}</span></p>
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
