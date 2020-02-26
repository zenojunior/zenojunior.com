import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import texture from "../../images/textures/stucco.png"

const A4 = ({ children }) => (
  <Paper id="a4">
    { children }
  </Paper>
)

const Paper = styled.div`
  background: white;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
  width: 21cm;
  height: 29.7cm; 
  display: flex;
  position: relative;
  order: 2;
  background-color: #f1f1f1;
  background: url(${texture});
  filter: grayscale(1);

  @media (prefers-color-scheme: dark) {
    & { background-color: #fff; }
  }

  ${media.lessThan("medium")`
    transform: scale(.5);
    height: 300px;
    margin: unset;
    overflow: hidden;
    order: unset;
  `}
`

export default A4
