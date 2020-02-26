import React from "react"
import styled, { keyframes } from "styled-components";

const PageTitle = ({ children }) => (
  <Text>{ children }</Text>
)

const headlineFocusAnimation = keyframes`
  0% { transform: scale(1) }
  10% { transform: scale(1.015); }
  100% { transform: scale(1); }
`;


const Text = styled.h1`
  color: #666;
  font-family: Exo,sans-serif;
  line-height: 1.1;
  font-size: 2.2em;
  font-weight: 300;
  letter-spacing: -.03em;
  text-align: center;
  margin-bottom: 3rem;
  animation-name: ${headlineFocusAnimation};
  animation-duration: .5s;
  animation-timing-function: ease;

  b {
    font-weight: 800;
  }

  @media (prefers-color-scheme: dark) {
    & { color: rgb(157, 165, 180); }
  }
`



export default  PageTitle
