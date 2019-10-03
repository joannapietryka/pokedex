import React, { Component } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import Pokemon from "../Pokemon/Pokemon";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    `

class PokemonsList extends Component {
    state = {
        pokemons: [],
        searchTerm: ""
    };

    componentDidMount() {
        fetch('http://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => this.setState({ pokemons: data.results })
        );
    }

    handleSearchInput = ({target: {value}}) => {
        this.setState({ searchTerm: value });
    };

    render() {

        const { searchTerm } = this.state;

        return (
        <>
        <Section>
          <Search
            value={searchTerm}
            handleEvent={this.handleSearchInput}
          />
            <div className="wrapper">
                {this.state.pokemons
                    .filter(pokemon =>
                        pokemon.name.includes(searchTerm))
                        .map((pokemon, index) => (
                        <Pokemon url={pokemon.url} name={pokemon.name} index={index + 1} key={pokemon.name} />
                    ))
                }   
            </div>
        </Section>
      </>
    );
  }
}
export default PokemonsList;
