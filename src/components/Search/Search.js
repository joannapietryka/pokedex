import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1.6em;
  text-align: center;
  margin: 2em 0 0;
`;

const Input = styled.input`
  width: 50%;
  font-size: 1.2em;
  margin: 1em auto 4em;
  padding: 0.7em 1em;
  outline: none;
  border: none;
  :focus {
    box-shadow: 5px 5px 7px #6464b9;
  }
  ::placeholder {
    color: #6464b9;
  }
`;

const Search = ({ handleEvent, value }) => {
  return (
    <>
      <Paragraph>Search for pokemons:</Paragraph>
      <Input
        type="text"
        onChange={handleEvent}
        value={value}
        placeholder="Type here..."
      />
    </>
  );
};

export default Search;
