import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

import './nav.css';
import Icon from '../typography/icon'

const Nav = props => (
  <Pages>
    <Page to="/" icon="person" name="Myself"></Page>
    <Page to="/interest" icon="track_changes" name="Interest"></Page>
    <Page to="/resume" icon="insert_drive_file" name="Resume"></Page>
    <Page to="/contact" icon="mail_outline" name="Contact"></Page>
  </Pages>
)

const Page = ({ name, icon, to }) => (
  <Item>
    <Link to={to} target="_blank" className="link" activeStyle={{ color: "#0aa3c6", pointerEvents: 'none' }}>
      <Icon name={icon} /> { name }
    </Link>
  </Item>
);

const Pages = styled.ul`
  display: flex;
  margin: auto;
  margin-right: 0;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: flex-start;
    margin-right: auto;
  `}
`

const Item = styled.li`
  display: flex;
  margin: 0 7px 0 0;
`

export default Nav
