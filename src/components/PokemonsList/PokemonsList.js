import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import Pokemon from "../Pokemon/Pokemon";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3em;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      color: #040b45;
    }
  }
`;

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const pokemonsData = await result.json();
    setPokemons(pokemonsData.results);
  };

  const handleSearchInput = ({ target }) => {
    setSearchTerm(target.value);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Section>
        <Search value={searchTerm} handleEvent={handleSearchInput} />
        <div className="wrapper">
          {pokemons
            .filter(pokemon => pokemon.name.includes(searchTerm))
            .map((pokemon, index) => (
              <Pokemon
                url={pokemon.url}
                name={pokemon.name}
                index={index + 1}
                key={pokemon.name}
              />
            ))}
        </div>
      </Section>
    </>
  );
};

export default PokemonsList;
