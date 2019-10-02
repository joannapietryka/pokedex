import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const Wrapper = styled(Link)`
    width: 32%;
    text-decoration: none;
    display: block;
    clear: both;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #9494ef;
    margin: 1em;
    :hover {
        background: #b183e0;
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    width: 45%;
    float: left;
`;

class Pokemon extends Component {

    state = {
        pokemon: {}
    };

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.index}/`)
            .then(response => response.json())
            .then(response => this.setState({ pokemon: response }));
    }

    render () {
        const { name, index } = this.props;

    return (
        <Wrapper to={`/details/${index}`}>  
            <Box>
                {this.state.pokemon.sprites ? <Image src={this.state.pokemon.sprites.front_shiny} alt={`${name} visualisation`} /> : <Loader />}
                <p>{name}</p>
            </Box>
        </Wrapper>
        );
    }
};
    
export default Pokemon;
