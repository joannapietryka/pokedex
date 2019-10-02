import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
    width: 32%;
    text-decoration: none;
    display: block;
    clear: both;
    transition: 2s;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #9494ef;git commit -m "first commit"
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
            <Image src={this.state.pokemon.sprites ? this.state.pokemon.sprites.front_shiny : ''} alt={`${name} img`} />
                <p>{name}</p>
            </Box>
        </Wrapper>
        );
    }
};
    
export default Pokemon;
