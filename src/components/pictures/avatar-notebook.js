import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query'

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      notebook: file(relativePath: { eq: "notebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar: file(relativePath: { eq: "myself.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Element>
      <Img className="avatar" draggable="false" fluid={data.avatar.childImageSharp.fluid} />
      <Img className="notebook" draggable="false" fluid={data.notebook.childImageSharp.fluid}/>
    </Element>
  )
}


const shake = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-.5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(.5px, 0, 0);
  }
`;


const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -5rem;
  user-select: none;
  cursor: text;

  ${media.lessThan("medium")`
    top: -3;
    order: -1
  `}

  &:hover {
    .avatar {
      transform: translateY(0);
    }
    .notebook {
      animation-play-state:paused;
    }
  }

  .avatar {
    width: 240px;
    margin-right: 2rem;
    transform: translateY(153px);
    transition: transform .3s ease-in-out;

    img {
      margin-bottom: 0;
    }
  }

  .notebook {
    min-width: 300px;
    margin-right: 2rem;
    user-select: all;
    animation-name: ${shake};
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-fill-mode: both;

    img {
      margin-bottom: 0;
    }
  }
`

export default Avatar
