import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const Wrapper = styled(Link)`
  width: 50%;
  text-decoration: none;
  text-transform: capitalize;
  @media (min-width: 768px) {
    width: 23%;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #9494ef;
  margin: 1em;
  border-radius: 5px;
  :hover {
    background: #b183e0;
    transform: scale(1.05);
    box-shadow: 5px 5px 7px #672990;
    border-radius: 10px;
  }
`;

const Image = styled.img`
  width: 50%;
`;

const Pokemon = ({ name, index }) => {
  const [pokemon, setPokemon] = useState({});

  const getPokemon = async id => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemon = await result.json();
    setPokemon(pokemon);
  };

  useEffect(() => {
    getPokemon(index);
  }, [index]);

  return (
    <Wrapper to={`/details/${index}`}>
      <Box>
        {pokemon.sprites ? (
          <Image
            src={pokemon.sprites.front_shiny}
            alt={`${name} visualisation`}
          />
        ) : (
          <Loader />
        )}
        <p>{name}</p>
      </Box>
    </Wrapper>
  );
};

export default Pokemon;
