import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Container from '../container'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Icon from '../typography/icon'

const Copyright = () => (
  <Container>
    <Text>
      <Left>
      © {new Date().getFullYear()}, <MaterialIcon icon="code" /> by Zeno <span style={{display: 'none'}}>v2</span>
      </Left>
      <Right>
        The code is open source and available at <LinkGithub />.
      </Right>
    </Text>
  </Container>
)

const Text = styled.div`
  display: inherit;
  white-space: nowrap;
  width: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: row;
  ${media.lessThan("medium")`
  & { flex-direction: column;flex-wrap: wrap; }
  `}
`

const Right = styled.div`
  margin-left: auto;
  display: inherit;
  align-items: inherit;
  flex-wrap: inherit;
`
const Left = styled.div`
  margin-right: auto;
  display: inherit;
  align-items: inherit;
  flex-wrap: inherit;
`

const BrandIcon = ({ icon }) => (<FontAwesomeIcon icon={icon} style={{fontSize: '15px', margin: '0 3px'}}/>)
const MaterialIcon = ({ icon }) => ( <Icon name={icon} style={{margin: "0 3px", fontSize: "19px"}}></Icon> )
const LinkGithub = () => ( <a href="https://github.com/zenojunior/zenojunior.com" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3px", color: 'inherit'}}><BrandIcon icon={faGithub} /></a> )

export default Copyright
