import React from "react";
import styled, { keyframes } from "styled-components";

const frame = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const Image = styled.img`
    width: 30px;
    height: auto;
    display: block;
    animation: ${frame} 4s infinite;
`;

const Loader = () => {
  return <Image src="/img/loader.png" alt="loading" />;
};

export default Loader;
