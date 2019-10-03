import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  align-self: flex-start;
  margin-left: 1.5em;
  @media (min-width: 768px) {
    margin-left: 4em;
  }
  button {
    background: #d3efa3;
    border: none;
    padding: 1em 2em;
    font-size: 1em;
    font-family: "Trebuchet MS";
    outline: none;
    font-weight: 800;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background: #c4ff5f;
    }
  }
`;

const BackButton = () => {
  return (
    <>
      <LinkWrapper>
        <Link to="/dashboard">
          <button>Back</button>
        </Link>
      </LinkWrapper>
    </>
  );
};

export default BackButton;
