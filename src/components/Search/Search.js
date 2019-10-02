import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    text-align: center;
    margin: 2em 0 0;
    `

const Input = styled.input`
    width: 50%;
    margin: 1em auto 4em;
    padding: 1.5em;
    outline: none;
    :focus {
        border-color: red;
      }
    `

const Search = ({ handleEvent, value }) => {
  return (
    <>
      <Paragraph>Search for pokemons</Paragraph>
      <Input type="text" onChange={handleEvent} value={value} placeholder="Type here..." />
    </> 
  );
};

export default Search;