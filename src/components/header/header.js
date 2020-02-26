import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import media from "styled-media-query";

import Nav from './nav';
import Photo from "../pictures/photo";
import Container from '../container'


const Image = styled.div`
  width: 50px;
  border-radius: 50px;
  overflow: hidden;
  border: 2px solid #d1d1d1;

  ${media.lessThan("medium")`
    width: 170px;
    border-radius: 170px;
    margin-left: auto;
  `}
`

const Line = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: 90px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Logo = () => (
  <Image>
    <Link to="/" style={{display: 'block'}}>
      <Photo />
    </Link>
  </Image>
)

const Header = () => (
  <Container>
    <Line>
      <Logo />
      <Nav />
    </Line>
  </Container>
)

export default Header
