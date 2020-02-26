import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import media from "styled-media-query"

import Header from "./header/header"
import Copyright from "./footer/copyright";

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <TopBar>
          <Header/>
        </TopBar>
        <Main>
          {children}
        </Main>
        <Footer>
          <Copyright />
        </Footer>
      </App>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const TopBar = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid #ddd;

  @media (prefers-color-scheme: dark) {
    & {
      background: rgba(85, 85, 85, 0.4);
      border-bottom: 1px solid rgb(48, 48, 48);
    }
  }
`

const App = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`

const Footer = styled.footer`
  display: flex;
  height: 90px;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  font-size: .85em;
  line-height: 1.3;
  font-family: Roboto;
  font-size: 14px;
  color: #8c8c8c;

  ${media.lessThan("medium")`
    flex-wrap: wrap;
    padding: 1rem;
    background: #fafafa;
    border-top: 1px solid #ddd;

    @media (prefers-color-scheme: dark) {
      & {
        background: rgba(85, 85, 85, 0.4);
        border-top: 1px solid rgb(48, 48, 48);
      }
    }
  `}
`

export default Layout
