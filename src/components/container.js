import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

const Container = ({ children }) => (
  <Element>
    { children }
  </Element>
)

const Element = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-direction: inherit;

  ${media.greaterThan("large")`
    & { max-width:1140px }
  `}
`

export default Container
