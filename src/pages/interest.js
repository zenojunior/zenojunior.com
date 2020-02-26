import React from 'react'
import styled, { keyframes } from 'styled-components';
import { TagCloud } from 'react-tagcloud'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Container from '../components/container'
import PageTitle from '../components/typography/page-title'

const data = [
  { value: 'Jenkins', count: 25, link: "https://jenkins.io/" },
  { value: 'MongoDB', count: 18, link: "https://www.mongodb.com/" },
  { value: 'React', count: 30, link: "https://pt-br.reactjs.org/" },
  { value: 'Webpack', count: 34, link: "https://webpack.js.org/" },
  { value: 'Jest', count: 15, link: "https://jestjs.io/pt-BR/" },
  { value: 'Wasm', count: 10, link: "https://webassembly.org/" },
  { value: 'React Native', count: 27, link: "https://facebook.github.io/react-native/" },
  { value: 'Docker', count: 30, link: "https://www.docker.com/why-docker" },
  { value: 'TypeScript', count: 15, link: "https://www.typescriptlang.org/" },
];

const InterestPage = () => (
  <Layout>
    <SEO title="It gives me interest 🧐" />
      <Section>
        <Container>
          <PageTitle>These technologies <b>are on my radar</b></PageTitle>
          <TagCloud
            minSize={20}
            maxSize={80}
            tags={data}
            style={{textAlign: 'center', transform: 'scale(0.7)'}}
            renderer={wordRenderer}
          />
        </Container>
      </Section>
  </Layout>
)

const wordRenderer = (tag, size, color, link) => (
  <a href={tag.link} target="_blank" rel="noopener noreferrer">
    <Word
      key={tag.value}
      style={{
        fontSize: `${size / 18}rem`,
        animationDelay: `${Math.random() * 2}s`,
        margin: `${size / 130}vh ${size / 40}vh`,
        padding: `${size / 45}rem ${size / 35}rem`,
      }}
    >
      {tag.value}
    </Word>
  </a>
)



const Section = styled.section`
  padding: 5rem 0px;
  width: 100%;
  display: inherit;
  align-items: inherit;
  flex-direction: inherit;
  position: relative;
  overflow: hidden;
`

const blinker = keyframes`
  50% { opacity: .0 }
`;

const Word = styled.span`
  color: #666;
  animation-name: ${blinker};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  font-family: Exo,sans-serif;
  background-color: #b5b5b5;
  color: #fff;
  border-radius: 10px;
  display: inline-block;
  font-weight: 300;

  &:hover {
    animation: 0;
    color: #fff;
  }

  @media (prefers-color-scheme: dark) {
    & {
      background-color: #e9e9e9;
      color: #24292e;
    }
    &:hover {
      color: #24292e;
    }
  }
`

export default InterestPage
