import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Loader from "../Loader/Loader";
import BackButton from "../BackButton/BackButton";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  @media (min-width: 768px) {
    height: 80vh;
  }
  h1 {
    text-transform: capitalize;
    font-size: 2.3em;
  }
`;

const PokemonDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #73e4c6;
  border-radius: 5px;
  width: 75%;
  padding: 2em;
  @media (min-width: 768px) {
    width: 50%;
    padding: 3em;
  }
`;

const frame = keyframes`
    0% { opacity: 0 } 
    25% { opacity: .75}
    50% { opacity: 1}
    75% { opacity: .75}
    100% { opacity: 0}
`;

const Image = styled.div`
  padding: 2em;
  img {
    transform: scale(1.5);
    animation: ${frame} 4s infinite;
  }
`;

const Info = styled.div`
  padding: 2em;
  span {
    font-weight: 800;
  }
`;

const PokemonDetailed = props => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [src, setSrc] = useState(true);
  const { id } = props.match.params;

  const getPokemonInfo = async index => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    const pokemonInfo = await result.json();
    setPokemonInfo(pokemonInfo);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      src ? setSrc(false) : setSrc(true);
    }, 4000);
    return () => clearInterval(interval);
  }, [src]);

  useEffect(() => {
    getPokemonInfo(id);
  }, [id]);

  const { name, height, weight, base_experience, sprites } = pokemonInfo;

  return (
    <Section>
      <BackButton />
      <h1>{name}</h1>
      <PokemonDetails>
        <Info>
          <p>
            Height: <span>{height}</span>
          </p>
          <p>
            Weight: <span>{weight}</span>
          </p>
          <p>
            Experience level: <span>{base_experience}</span>
          </p>
        </Info>
        <Image>
          {sprites ? (
            <img
              src={src ? sprites.front_default : sprites.back_default}
              alt={`${name} visualisation`}
            />
          ) : (
            <Loader />
          )}
        </Image>
      </PokemonDetails>
    </Section>
  );
};

export default PokemonDetailed;
