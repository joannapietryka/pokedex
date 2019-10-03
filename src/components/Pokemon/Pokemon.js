import React, { Component } from "react";
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
class Pokemon extends Component {
  state = {
    pokemon: {}
  };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.index}/`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  render() {
    const { name, index } = this.props;
    const {
      pokemon: { sprites }
    } = this.state;

    return (
      <Wrapper to={`/details/${index}`}>
        <Box>
          {sprites ? (
            <Image src={sprites.front_shiny} alt={`${name} visualisation`} />
          ) : (
            <Loader />
          )}
          <p>{name}</p>
        </Box>
      </Wrapper>
    );
  }
}

export default Pokemon;
