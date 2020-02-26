import React from "react"
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Zeno Junior - Front-end Engineer" sufix={false} />
    <Container>
      <Box>
        <Title>Hey, I'm Zeno Junior!</Title>
        <Text>I am a front-end engineer passionate about applications with a focus on user experience.</Text>
      </Box>
    </Container>
  </Layout>
)

const Box = styled.div`
  margin: 0 7rem;
  top: -2rem;
  position: relative;

  ${media.lessThan("medium")`
    margin: 0 1rem;
    top: 0;
  `}
`

const Text = styled.h2`
  color: #666;
  font-family: Exo,sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 2em;
  @media (prefers-color-scheme: dark) {
    & { color: #80848c }
  }
`

const Title = styled.h1`
  font-size: 3.25em;
  line-height: .85;
  font-family: Exo, sans-serif;
  font-weight: 800;
  letter-spacing: -.03em;
  color: #666;
  
  ${media.lessThan("medium")`
    font-size: 3.25em;
  `}

  @media (prefers-color-scheme: dark) {
    & { color: #9da5b4 }
  }
`

export default IndexPage
